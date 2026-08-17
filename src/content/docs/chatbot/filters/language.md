---
title: Language Filter
sidebar:
  label: Language
description: "Remove chat messages written in languages you haven't allowed with the StreamElements Chatbot Language filter."
keywords:
- StreamElements
- chatbot
- language filter
- chat moderation
- allowed languages
---

The Language filter moderates messages based on the language they are written in. A message is flagged when the detector is confident about its language and that language is not on your allowed list. When no allowed languages are configured, the filter is off.

## Settings

| Setting | Description |
|---------|-------------|
| Allowed languages | The languages permitted in chat. An empty list disables the filter. |
| Minimum detection confidence | How sure the detector must be before the filter may act, as a percentage. Messages below this are left alone. Defaults to 40. |
| Ignored words | Words and phrases stripped from a message before its language is detected, such as emote names and channel slang. |

The filter also supports the [settings shared by all filters](/chatbot/filters#settings-shared-by-all-filters) — timeout length, custom timeout message, excluded user level — which also determine [what happens on a violation](/chatbot/filters#what-happens-on-a-violation).

## How a message is checked

1. Your ignored words are removed from the message, wherever they appear and whatever their casing.
2. Everything that is not a letter or a space is dropped, so numbers, punctuation, and emoji never sway the result. If nothing is left, the message is skipped.
3. What remains goes to the language detector, which returns one language and a confidence score.
4. If that score is below your **Minimum detection confidence**, the message is skipped.
5. Otherwise the detected language is compared against your allowed list. A match means the message passes; anything else is flagged.

The filter never punishes on doubt. A message it cannot read confidently is left alone, and so is one the detector fails to answer for in time.

## Choosing a confidence value

The detector picks between 75 languages, so its confidence is spread thin on short messages. A two-word message rarely carries enough signal to identify, and the top guess is often nonsense:

| Message | Top guess | Confidence |
|---------|-----------|------------|
| `ok` | Zulu | 6.4% |
| `hi` | Maori | 6.1% |
| `gg` | Indonesian | 14.4% |
| `lets gooo` | Tswana | 21.7% |
| `KEKW PogChamp LULW` | Zulu | 23.1% |
| `how are you doing today` | English | 45.6% |
| `hola amigos como estan todos hoy` | Spanish | 47.8% |
| `ich finde diesen stream richtig gut heute` | German | 86.8% |

Real sentences land around 45% and up. Chat noise sits well below 25%. The default of 40 falls in the gap, which is why short English messages survive in an English-only channel while genuine foreign sentences are caught.

Lower the value and the filter reaches further, at the cost of acting on messages it is guessing about. Raise it and only unmistakable foreign text is flagged.

:::tip
Add your channel's emote names and catchphrases to **Ignored words**. They are the most common reason an otherwise ordinary message gets read as another language.
:::
