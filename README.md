# Personal website

Plain HTML/CSS site, hosted free on GitHub Pages at **https://geoffkam.github.io**
(GitHub account `GeoffKAM`, repository `geoffkam.github.io`).

```
index.html      Home: about, photo, job market paper, references
research.html   JMP, working papers, work in progress, research statement
teaching.html   teaching experience, statement, evaluations, materials
style.css       all styling (dark theme always on; colors at the top)
updated.js      fills in the "Last updated" footer
images/         photo.jpg (shown on Home; the original main.jpg is git-ignored)
files/          cv.pdf, papers/, statements/, teaching/
.nojekyll       tells GitHub Pages to serve the files as-is
```

## Next major revision: 10 November 2026

Calendar reminder set for that day (Google Calendar, alerts the morning before). Open items:

- [ ] Fields line on Home (not in the CV)
- [ ] Academic CV → `files/cv.pdf`; un-hide the CV links on all three pages
- [ ] JMP abstract, draft PDF and slides
- [ ] Abstracts for the other papers; move any paper with a draft to Working Papers
- [ ] Research and teaching statements
- [ ] Teaching evaluations; teaching materials (Econ 4850 / 6850 notebooks)
- [ ] References, job-market banner
- [ ] Commit and push (the footer date updates itself)

## Editing content

Open any `.html` file in a text editor (TextEdit in plain-text mode, VS Code, BBEdit).
Replace every `[BRACKETED PLACEHOLDER]` with real text. Search for `[` to find them all.

### Showing a hidden slot

Items that are not ready carry the word `hidden`. They stay in the file but do not appear on
the page. To show one, fill it in and delete the word `hidden`:

```html
<p class="paper-links" hidden><a href="files/papers/jmp.pdf">Draft (PDF)</a></p>
```
becomes
```html
<p class="paper-links"><a href="files/papers/jmp.pdf">Draft (PDF)</a></p>
```

| To add | Put the file at | Then un-hide |
|---|---|---|
| CV | `files/cv.pdf` | the `CV` menu item in the sidebar of **all three pages** |
| New photo | replace `images/photo.jpg` (portrait 4:5, ~640×800 px) | — (already shown on Home) |
| JMP draft / slides | `files/papers/jmp.pdf`, `jmp-slides.pdf` | `paper-links` under the JMP on Research, and "Abstract and draft" on Home |
| An abstract | — (type it in) | the `<details class="abstract">` under that paper |
| Coauthors / journal status | — | the `authors` / `venue` line under that paper |
| Working Papers section | — | the `<section hidden>` around "Working Papers" on Research; move a paper's `<article>` block there from Work in Progress once its draft exists |
| Fields | — | the `Fields:` line on Home |
| Research statement | `files/statements/research-statement.pdf` | the link at the top of Research |
| Teaching statement | `files/statements/teaching-statement.pdf` | the link at the top of Teaching |
| Teaching evaluations | `files/teaching/evaluations.pdf` | the link at the top of Teaching |
| Teaching materials | `files/teaching/<name>.pdf` | the "Teaching Materials" section, one `<li>` per file |
| References | — | the "References" section on Home |
| Job-market banner | — | `jm-banner` on Home |
| Scholar / SSRN / LinkedIn / GitHub | — | the matching `<li>` in the sidebar `links` list of **all three pages** (replace `[ID]`) |

A link with only one item (e.g. a draft but no slides): delete the `<a>…</a>` you do not need.
To add a paper, copy a whole `<article class="paper">…</article>` block and edit the copy.
The sidebar (name, email, links, menu) is repeated in all three pages: use your editor's
find-and-replace across files so the pages stay identical.

"Last updated" in the footer fills itself in (`updated.js`): it shows the time GitHub Pages
published the page, in St. Louis time, so every push updates it. The date typed inside
`<span id="updated">` is only a fallback for browsers with JavaScript turned off.

After changing `style.css` or `updated.js`, raise the number after `?v=` where all three pages
load them (e.g. `style.css?v=3` → `style.css?v=4`). Browsers keep a copy of those files for up to
10 minutes; a new number makes them fetch the new version at once.

**Privacy:** the repository is public. Anything in `files/` and anything in the HTML source,
hidden slots included, can be seen by anyone. Add a PDF only when you are ready to share it.

## Previewing on your Mac

```bash
cd "/Users/geoffreykam/Documents/Claude local /personal webste" && python3 -m http.server 8000
```
Then open http://localhost:8000. Press Ctrl+C in the terminal to stop.

## Publishing the first time (GitHub Desktop)

1. On github.com, signed in as `GeoffKAM`: **+ → New repository**. Name it exactly
   `geoffkam.github.io`, set **Public**, leave "Add a README", .gitignore and license **unticked**
   (the repository must start empty). Click **Create repository**.
2. GitHub Desktop: **File → Add Local Repository…** → choose this folder → **Add Repository**.
   (Its link to `github.com/GeoffKAM/geoffkam.github.io` is already set up.)
3. Bottom left: type a summary such as `Initial site` → **Commit to main**.
4. Click **Publish branch** (top bar; it reads **Push origin** on later updates).
5. On github.com, open the repository's **Settings → Pages**. Check that "Source" is
   **Deploy from a branch**, branch **main**, folder **/ (root)**, then **Save** if you changed anything.
6. After a minute or two the site is live at https://geoffkam.github.io. The **Actions** tab shows
   build progress.

## Updating the live site

Edit and save the files, then in GitHub Desktop: write a summary → **Commit to main** → **Push origin**.
The live site updates within a couple of minutes.

## Adding a custom domain later (e.g. geoffreykam.com)

1. Buy the domain from a registrar (Cloudflare, Namecheap, Porkbun).
2. Repository **Settings → Pages → Custom domain**: enter it and **Save**. This adds a `CNAME`
   file to the repository. In GitHub Desktop, **Fetch origin → Pull** to bring that file down.
3. At the registrar, add the DNS records that GitHub's documentation lists, "Managing a custom
   domain for your GitHub Pages site": four `A` records for the bare domain and a `CNAME` for
   `www` pointing to `geoffkam.github.io`. Copy the IP addresses from that page, not from here.
4. Once GitHub's DNS check passes, tick **Enforce HTTPS**. The old `github.io` address redirects
   to the new one.
