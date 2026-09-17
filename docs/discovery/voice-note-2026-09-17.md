# Project brief — WhatsApp voice note, 17 September 2026

The founding brief for this programme, received as a 2 minute 9 second WhatsApp
voice note. Transcribed locally with Whisper (large-v3); machine timings are
preserved in `voice-note-2026-09-17.transcript.json`.

The speaker addresses **Mayurji** and **Sandeepji** and appears to be speaking
on behalf of the mandir. He opens with *"Shubh raatri"* and closes with
*"Namaskar"*.

> **Transcription caveat.** Whisper detected the audio as English (p=0.95) but
> the speaker code-switches into Sanskrit/Hindi terms, which the model
> mangles. Three phrases were reconstructed from context and are marked below.
> Confirm them with the speaker — the third one sets the deadline.
>
> | Heard | Reading | Confidence |
> |---|---|---|
> | "center of Sanat and Hema" | **centre of Sanatan Dharma** | high |
> | "www.trilokitham.nl" | **www.trilokidhaam.nl** | high |
> | "before not a 3b" | **before Navratri** | medium — drives the deadline |

## Verbatim transcript

> Shubh Raatri, Mayurji or Sandeepji. Yes, the idea is to work in two stages.
> First is to have the website give the right information in Dutch and
> English. So the weekly services, the festivities, all that kind of things,
> the mantras and that kind of information. And also want to make a good
> connection with social media so that the website is leading people to the
> social platforms and from social platforms to the website. That's the first
> stage. And then, if we have set up that in a right way, then we can build on
> like a community building platform — like that we make the mandir like a
> centre of Sanatan Dharma, where we connect and also link people to the right
> places. But okay, that's the second step.
>
> Now, there's someone that donated the website and pays also for the yearly
> fee for that, so I can share that. Check the website www.trilokidhaam.nl and
> check — Sandeep especially, and also Mayurji — what are your ideas about
> that, how can we change that?
>
> And then, that's why I ask also for 1 October, that we can build and make in
> like 10 days that we have a basic for the website. And then before Navratri
> we have the basics from the website, and from there we can work further.
> Okay, let me know if you have ideas about that, and if you need some
> information for that. Okay — Namaskar.

## Requirements as stated

### Stage 1 — get the information right, in two languages

| # | Requirement | Source |
|---|---|---|
| R1 | The website must give **the right information** | "give the right information" |
| R2 | In **Dutch and English** | "in Dutch and English" |
| R3 | Weekly services | "the weekly services" |
| R4 | Festivals / festivities | "the festivities" |
| R5 | Mantras | "the mantras" |
| R6 | "…and that kind of information" — i.e. the wider body of religious knowledge | verbatim |
| R7 | Website → social platforms | "the website is leading people to the social platforms" |
| R8 | Social platforms → website | "and from social platforms to the website" |

R1 is the load-bearing requirement and it is stated first. Read against what
the live site currently publishes, "the right information" is not a vague
aspiration — the site contradicts itself on opening hours, states an opening
schedule that is simply false, and shows fabricated testimonials and follower
counts. See [`legacy-site-audit.md`](legacy-site-audit.md).

R7 and R8 together describe a **loop**, not a row of icons in a footer. The
site should give people a reason to follow, and the social accounts should
give people a reason to come back to the site.

### Stage 2 — community building (explicitly deferred)

Only after stage 1 is "set up in a right way":

- a **community-building platform**
- position the mandir as a **centre of Sanatan Dharma**
- "where we **connect**" people
- and "**link people to the right places**"

Stage 2 is deliberately out of scope for now. Recorded here so it is not lost,
and so stage-1 choices do not paint us into a corner — see
[`../roadmap.md`](../roadmap.md).

## Timeline

The speaker asks for **1 October** as a start, about **10 days** of work, and
wants the basics live **before Navratri**.

Shardiya Navratri 2026 begins **Sunday 11 October** (from the temple's own
2026 programme; see `content/festivals-2026.yml`). 1 October + 10 days lands
on 11 October, so the three statements are consistent and the deadline reads:

> **Website basics live by Saturday 10 October 2026.**

Navratri is the right thing to aim at. It is nine consecutive evenings, the
highest-traffic stretch in the temple's year, and the one week when the most
people will look the mandir up.

**However:** this brief is dated 17 September. A start on 1 October leaves 10
days of build for a site that needs content decisions from the board (see the
open questions below), and content decisions in a volunteer organisation take
longer than code. Starting the content work now, in parallel, rather than
waiting for 1 October, is the single biggest risk reduction available.

## Commercial and governance facts

- **Someone donated the website and pays the annual fee.** The speaker offers
  to share the details. Get them before making any migration decision — who
  the donor is, what exactly is being paid for (domain, hosting, Divi
  licence?), when it renews, and in whose name the domain is registered.
  Moving hosting could waste a donor's contribution, or quietly cost the
  temple money it does not have. This is a relationship question as much as a
  technical one.
- The domain `trilokidhaam.nl` is live and should be preserved. It carries
  whatever search reputation the temple has.

## Open questions for the board

Ordered by how much they block the build.

1. **Who will edit the site after launch, and are they comfortable with a CMS?**
   This decides the entire architecture. If the answer is "volunteers, in
   Word", we need a hosted CMS. If it is "Sandeep and Mayur", a static site
   with content in this repo is faster, cheaper and safer.
2. **Rebuild, or repair the existing WordPress in place?** See the audit for
   the evidence either way.
3. **What does the donor's payment cover, and when does it renew?**
4. **Is the stichting an ANBI?** Decides whether donations are tax-deductible
   for Dutch donors, which is the strongest argument a donation page has.
5. **Who owns the social accounts** (Instagram, YouTube, the private Facebook
   group), and who is willing to post? R7/R8 need a person, not just a link.
6. **Is `contact@trilokidhaam.nl` a real mailbox?** A temple e-mailing from
   gmail looks less established than one on its own domain.
7. **Is the Divali date of 9 November intended?** See
   `content/festivals-2026.yml`.
8. **Who is the English translation for?** Second-generation community members,
   non-Hindu Eindhoven residents, and expats want quite different things from
   the same page. It changes the tone more than the wording.
