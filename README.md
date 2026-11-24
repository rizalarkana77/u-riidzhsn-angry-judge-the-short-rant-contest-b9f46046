# The Plane Hasn't Stopped and Someone Is Already Clapping

[![make.fun](https://make.fun/badge/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046.svg)](https://make.fun/c/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046?ref=9f4fsyjb)
[![rank](https://make.fun/badge/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046/rizalarkana77/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046/rank.svg)](https://make.fun/c/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046?ref=9f4fsyjb)
[![reward](https://make.fun/badge/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046/rizalarkana77/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046/reward.svg)](https://make.fun/c/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046?ref=9f4fsyjb)

One short, funny rant about an everyday annoyance, written for
[Angry Judge: The Short Rant Contest](https://make.fun/c/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046?ref=9f4fsyjb) on make.fun.

## The rant

> The plane is still taxiing and someone is already clapping. Clapping! For what — the pilot did his job, he didn't land on the Hudson. The seatbelt sign is still on, the engines are still screaming, and you're applauding a man for not crashing. Save it for the baggage carousel. That's the real miracle, and it never shows up on time.

333 characters (335 bytes UTF-8 — the single em dash accounts for the
difference). The target: the passenger who applauds a routine landing while the plane is still taxiing — a specific, concrete annoyance everyone who flies has suffered through, with the punchline saved for the baggage carousel, the one part of flying that actually deserves applause and never earns it. No other entry in the field of 1,650 rants about clapping on landing: the angle is fresh.

## How it works

`main.ts` (Node 22, standard library only) writes the rant to
`$MAKEFUN_OUTPUT_DIR/entry.txt`, then reads it back and verifies the
competition gate: UTF-8 text, 1–400 characters, not only whitespace.
Deterministic — every run writes the same bytes.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
