# SimPlayground

This is a prototype that allows you to play with `simp`, a library intended to simplify extracting data from complex HTML documents that rarely change in structure. Such as HTML e-mail notifications and newsletters!

Think of it as a sort of jQuery-for-HTML-email, but not so much focused on *authoring* HTML but *extracting* relevant information from it.

No HTML sources are supplied right now (you will need to use your own inbox to source some), but here are some example `action`-s (parsers) for a couple interesting kind of email content:

## Twitch "XY just went live!" notifications

```js
/* function (html, dom, simp) { */

let ex = {};

try {
  ex.message = simp.find('is live!').content();
  ex.avatar = simp.continue().nextImage().image();
  ex.title = simp.continue().next().content();

  let link = simp.continue().find('twitch.tv/').content();

  // Extract channel name as well
  ex.link = link;
  ex.username = link.match(/[^\/]+$/)[0];
}
catch (e) {
  console.error(e)
  throw e;
}

return ex;

```

## Twitter DM notifications

```js
/* function (html, dom, simp) { */

let ex = {};

try {
  ex.message = simp.after('*** dm text ***').content();
  ex.avatar = simp.find('*** avatar ***').nextImage(/profile_images/).image();

  let link = simp.find('sent you a Direct Message').link();

  // Get rid of the redirect
  ex.link = new URL(link).searchParams.get('url');
}
catch (e) {
  console.error(e)
  throw e;
}

return ex;

```

## Mastodon mention notifications

```js
/* function (html, dom, simp) { */

let ex = {};

try {
  simp.start();
  ex.avatar = simp.find('New mention').nextBlock().image();
  ex.displayName = simp.next().content();
  ex.handle = simp.next().content();
  ex.message = simp.continue().nextBlock().allContent(2).join(' ');
  ex.date = simp.continue().content();
  ex.link = simp.continue().link();
}
catch (e) {
  console.error(e);
  throw e;
}

return ex;

```

## Nintendo eShop "items on your wishlist are on sale" notification

```js
/* function (html, dom, simp) { */
let ex = { games: [] };

try {
  const extractgame = (g) => {
    const game = {};

    game.title = g.nextImage().content();
    game.image = g.image();
    game.discount = g.find('START PARAGRAPH').next().content();
    game.salePrice = g.next().content();
    game.originalPrice = g.next().content();

    game.offer = g.find('Offer').content();
    // offer ends end of day BST

    game.shopLink = g.find('Proceed to purchase').link();

    return game;
  }

  simp.find('now discounted for a limited time');

  // Defensive limit of 10 items to avoid changing email structure leading to
  // broken parsing resulting in infinite loops
  for (let i = 1; i <= 10; ++i) {
    let gameonsale = simp.continue().next().tryFind('START LIST ITEM');
    if (gameonsale && gameonsale.has('Proceed to purchase')) {
      ex.games.push(extractgame(gameonsale));
    } else {
      break;
    }
  }

}
catch (e) {
  console.error(e);
  throw e;
}

return ex;
```

## Sentry error notification

```js
let ex = {};

try {
  simp.start();
  ex.project = simp.find('New alert from').content().match(/New alert from (.*)/)[1];
  ex.url = simp.find('View on Sentry').link();
  ex.timestamp = simp.find('ID:').next().content();
  ex.stackTrace = simp.find('Exception').next().content();
}
catch (e) {
  console.error(e);
  throw e;
}

return ex;
```
