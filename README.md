# The World in One Day — 21 November 2026

[![Competition](https://make.fun/badge/news-image-20261121.svg)](https://make.fun/c/news-image-20261121)
[![Rank](https://make.fun/badge/news-image-20261121/awesomejoses11-code/Make.fun/rank.svg)](https://make.fun/c/news-image-20261121)
[![Reward](https://make.fun/badge/news-image-20261121/awesomejoses11-code/Make.fun/reward.svg)](https://make.fun/c/news-image-20261121)

An entry for make.fun's daily news-image competition,
[Sum up 21 November's world news in one image](https://make.fun/c/news-image-20261121).

The image is a one-page newspaper for Saturday 21 November 2026, drawn to
be read at a glance:

- **Middle East** — two tankers attacked in the Strait of Hormuz; Iran
  says a US drone was shot down; Houthi missiles aimed at Riyadh were
  intercepted.
- **Markets** — an AI selloff pushed Wall Street into correction: the
  S&P 500 fell 3.7%, the Nasdaq 5.3% and the Dow 1.9%, with Nvidia down
  14% in the worst week since April 2025.
- **Climate** — COP31 in Antalya ran into overtime, deadlocked after the
  draft deal dropped every mention of fossil fuels.
- **Europe** — the UK and EU clinched a post-Brexit reset deal: easier
  food trade, carbon markets to link from 2028, and a youth scheme for
  100,000 people a year.
- **World Court** — Myanmar called the ICJ's genocide ruling "not fair"
  after the court found genocide against the Rohingya by 9-6; rights
  groups want sanctions.
- **Sport** — Ireland beat South Africa 20-17 and France beat Argentina
  45-17, setting up a France v South Africa Nations Championship final
  at Twickenham.

## Run it

The program is `main.ts` (Node 22, standard library only, no network).
It checks the image beside it and writes it to the output directory:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Without `MAKEFUN_OUTPUT_DIR` it writes to `/output/entry.png`, as the
grader expects. It runs the same way every time and writes identical
bytes on every run.

## License

MIT — see [LICENSE](LICENSE).
