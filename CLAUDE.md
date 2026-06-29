# q247.live — pravidla denní rutiny

Statický web q247.live. Zdrojové soubory:
- `web/index.html` — česká verze
- `web/en.html` — anglická verze (zrcadlo, jen přeložené texty)

Denní rutina aktualizuje obě verze. Cíl těchto pravidel: aby se web **s každým během nerozbíjel** a aby obsah byl **reálně čerstvý**, ne jen označený jako čerstvý.

## 0. Vždy uprav OBA soubory
Každá obsahová i strukturální změna jde do `web/index.html` **i** `web/en.html` současně (stejná struktura, jen lokalizované texty).

## 1. „Příštích 5 dní" (`#akce`) — pět sloupců vedle sebe
Sekce má kontejner `<div class="tl tl5"> … </div>` a uvnitř **přesně pět** `<div class="tlcol">…</div>` (jeden na den).

- **KRITICKÉ:** uzavírací `</div>` kontejneru `.tl.tl5` patří až **za pátý sloupec**, těsně před `</section>`. Nikdy ho nedávej po 3. sloupci — jinak se 4. a 5. den vykreslí jako boxy na celou šířku stránky (přesně tahle regrese se opakovala).
- Kontrola po editaci: mezi `<div class="tl tl5">` a jeho `</section>` musí být právě 5× `tlcol`. Hranice **mezi** sloupci mají dvojí `</div>` (karta + sloupec); **jen poslední** hranice před `</section>` má trojí `</div>` (karta + sloupec + kontejner).

## 2. Obrázky — jen spolehlivá URL
`.feat__photo` (Tip dne) a `.tip__bg` (Párování) **musí** mít reálný `background-image:url(...)`, ne jen gradient.

- Wikimedia: používej **vždy** tvar `https://commons.wikimedia.org/wiki/Special:FilePath/<Přesný_Název_Souboru>.jpg` — sám přesměruje na správný soubor.
- **Nikdy** neskládej ruční „thumb" URL typu `https://upload.wikimedia.org/.../thumb/3/3c/<Soubor>/1280px-<Soubor>` — hash v cestě si nelze tipnout a vede na 404 (prázdný obrázek).
- Ověřené funkční zdroje: `Special:FilePath/Riegrovy_sady3.jpg`, `friendsclub.cz/uploads/events/...`. Vždy vol soubor, který reálně existuje.

## 3. Časové razítko — skutečný čas běhu
Na dvou místech v každém souboru:
- `<p class="hero__updated" data-updated="RRRR-MM-DD">… v HH:MM</p>` (CZ) / `… at HH:MM` (EN)
- `<!-- q247:lastrun RRRR-MM-DDTHH:MM:SS+02:00 -->`

Nastav **skutečný čas, kdy rutina běží** (časové pásmo Europe/Prague), ne pevných `09:00`. `data-updated` = dnešní datum. (JS sám přepíše „dnes" na datum, pokud není dnešní — čas `HH:MM` je ale statický text, musí ho zapsat rutina správně.)

## 4. „Co slyšet" (`#slyset`) — denně čerstvé
Projdi **každý den**. Nenechávej tu týdny viset stejnou epizodu.
- Hero (`article.media1`) = reálně **nejnovější** epizoda; karty pod ním seřazené od nejnovější.
- Relativní data („dnes", „před X dny", „tento týden", „✨ Nejnovější", „čerstvý díl") musí odpovídat **skutečnému datu vydání**. Starou epizodu nikdy neoznačuj jako dnešní/nejnovější.
- Zdroje k procházení: KYDY, Teplá vlna, Bad Gays, Making Gay History, Queer Collective a další queer série (CZ/SK/EN) + queer epizody běžných podcastů.

## 5. „Co vidět" (`#videt`) — denně obměňuj klasiku
- Trendující (hero + horní karty `▲ … trenduje`) mohou vydržet déle.
- Karty `◆ klasika` **obměňuj každý den** z širšího poolu (např. rotace podle data), ať výběr není pořád stejný.
- Pool klasik (rotuj, neopakuj stále stejných pět): Brokeback Mountain, Call Me By Your Name, Carol, Moonlight, Pride, Portrét dívky v plamenech, Weekend, God's Own Country, Tangerine, Happiest Season, The Handmaiden, Milk, A Single Man, Paris Is Burning, But I'm a Cheerleader, Beautiful Thing, The Way He Looks, Blue Is the Warmest Colour… (seznam klidně rozšiřuj).
- U každého ověř funkční trailer (YouTube ID → `img.youtube.com/vi/<ID>/mqdefault.jpg`), ČSFD/IMDb odkaz a hodnocení.

## Kontrolní seznam po každém běhu
- [ ] „Příštích 5 dní": 5 sloupců vedle sebe v jedné řadě (žádný box na celou šířku).
- [ ] Tip dne i Párování: obrázky se reálně načítají (ne prázdný gradient).
- [ ] Čas aktualizace = skutečný čas běhu rutiny.
- [ ] „Co slyšet" i „Co vidět" se oproti včerejšku reálně proměnily.
- [ ] Stejné změny v `web/index.html` i `web/en.html`.
