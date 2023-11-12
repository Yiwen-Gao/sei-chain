package cli

import (
	"fmt"
	"strconv"

	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"

	"github.com/sei-protocol/sei-chain/x/nitro/types"
)

// GetTxCmd returns the transaction commands for this module
func GetTxCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:                        types.ModuleName,
		Short:                      fmt.Sprintf("%s transactions subcommands", types.ModuleName),
		DisableFlagParsing:         true,
		SuggestionsMinimumDistance: 2,
		RunE:                       client.ValidateCmd,
	}

	cmd.AddCommand(
		NewRecordTransactionDataCmd(),
	)

	return cmd
}

func NewRecordTransactionDataCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "record-txs [slot] [root] [tx1 tx2 ...]",
		Short: "record nitro transactions and state root for a slot",
		Args:  cobra.MinimumNArgs(2),
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return fmt.Errorf("unable to get context: %w", err)
			}

			slot, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return fmt.Errorf("unable to parse slot: %w", err)
			}

			root := args[1]
			if !isValidBlockHash(root) {
				return fmt.Errorf("invalid state root format")
			}

			txs := []string{}
			for i := 2; i < len(args); i++ {
				if !isValidHex(args[i]) {
					return fmt.Errorf("transaction data needs to be hex")
				}
				txs = append(txs, args[i])
			}

			txf := tx.NewFactoryCLI(clientCtx, cmd.Flags()).WithTxConfig(clientCtx.TxConfig).WithAccountRetriever(clientCtx.AccountRetriever)
			msg := types.NewMsgRecordTransactionData(
				clientCtx.GetFromAddress().String(),
				slot,
				root,
				txs,
			)

			return tx.GenerateOrBroadcastTxWithFactory(clientCtx, txf, msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)
	return cmd
}

func isValidHex(input string) bool {
	_, err := strconv.ParseInt(input, 16, 64)
	return err == nil
}

func isValidBlockHash(input string) bool {
	// a block hash is a 64 character hex string
	return isValidHex(input) && len(input) == 64
}
