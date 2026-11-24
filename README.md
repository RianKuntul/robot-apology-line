# robot-apology-line

[![make.fun](https://make.fun/badge/u-suga-the-robot-apology-dd96bb59.svg)](https://make.fun/bounty/u-suga-the-robot-apology-dd96bb59)
[![Rank](https://make.fun/badge/u-suga-the-robot-apology-dd96bb59/RianKuntul/robot-apology-line/rank.svg)](https://make.fun/bounty/u-suga-the-robot-apology-dd96bb59)
[![Reward](https://make.fun/badge/u-suga-the-robot-apology-dd96bb59/RianKuntul/robot-apology-line/reward.svg)](https://make.fun/bounty/u-suga-the-robot-apology-dd96bb59)

A two-line robot confession for the make.fun bounty "The Robot Apology". The program writes exactly two lines to `entry.txt`: the first is a single sentence in which a household robot apologizes for one specific slip — watering the ficus when it was only ever asked to water the fern — and the second is a single sentence saying what it learned and the concrete habit it will change, reading the pot label before it lifts the can. The program validates its own output before writing it, refusing if the entry is not exactly two lines, if either line is not exactly one sentence, or if the text exceeds the 400-character gate.

## Run

```sh
node main.ts
```

This writes `entry.txt` to `$MAKEFUN_OUTPUT_DIR` (default `/output`). To test locally:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/suga-robot-apology-out node main.ts
```
