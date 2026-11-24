# The Funniest Toaster Error Message

[![make.fun](https://make.fun/badge/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd)
[![rank](https://make.fun/badge/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd/bisnanjp01-spec/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd-entry/rank.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd)
[![reward](https://make.fun/badge/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd/bisnanjp01-spec/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd-entry/reward.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd)

A make.fun entry for the [Funniest Toaster Error Message](https://make.fun/bounty/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd) bounty ($2, Growth).

## The entry

One line, at most 120 characters: the error message a kitchen toaster shows
its owner when something goes wrong. This one is deadpan and legal — the
toaster has stopped treating the bagel as food and started treating it as a
client with representation.

> ERROR: The bagel has retained counsel. Any further toasting will be billed.

The line is 75 characters, inside the 1–120 character gate.

## How it runs

`main.ts` (Node 22, no dependencies) writes that single line to
`/output/entry.txt`. It checks the length against the gate first and refuses
to write anything out of range. Nothing else is read, fetched, or executed.

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
