
Yes, but that's not the whole story.

I'm looking for little things - simple things - that already exist and can drastically change the way we *think*. 0D is one such thing (FIFOs in addition to LIFO function calls). HTML already exists and has worked out a lot of the kinks in representing text. Once you can parse HTML, then XML and SVG are next. 

Does that lead to new ways to express things and does it lead to totally new ideas? (I think yes).

Here's a silly example:
```
function xyz () {
    var <mark><i>I <b>want</b> a </i>hamburger</mark>;
    const 👍! = true;
    <mark><i>I <b>want</b> a </i>hamburger</mark> ⇐ 👍!;
}
```

function xyz () {
    var <mark><i>I <b>want</b> <sub>a</sub> </i>hamburger</mark>;
    const 👍! = true;
    <mark><i>I <b>want</b> <sub>a</sub> </i>hamburger</mark> ⇐ 👍!;
}

Using recursive descent parsing (PEG / OhmJS) we can parse

`<mark><i>I <b>want</b> a </i>hamburger</mark>`

as a single entity (and worse, we can parse more recursive things), whereas with technologies like CFG and REGEX, even if you *can* do it, you *don't* bother imagining to do it.

The purposes of programming are:
1. to make a machine do what you want
2. to explain to other humans what you wanted to accomplish.

I see 1950s-style byte-oriented scanning and function-based thinking as being severely limiting. When all you've got is a hammer, everything looks like a nail. When all you've got is a function-based notation, then everything looks like a function. Functions are useful, but they are not the best way to explain some things. Ask Feynman why he invented Feynman diagrams.

Here's another silly example:
```
function f (a, b) {
    // example function that does nothing interesting
    let c = 3;
    a = "Hello World";
    if (b) {
        return true;
    } else {
        return false;
    }
}
```

and, the very same function
```
function f (a, b) {
// example function that does nothing interesting
let c = 3; a = "Hello World"; if (b) { return true; } else { return false; } }
```

I think that the former communicates to other humans better than the latter, although the machine doesn't care.

Why? 

That question interests me. 

We seem to fall into a trap where, once we find a notation that describe one aspect of a phenomenon, we begin believing that we understand the whole phenomenon. Like the prevalent belief that Maxwell's Equations define all of electrical phenonmena (they don't). Like seeing a 2D representation of sound as a sine wave on an oscilloscope and thinking that we understand what's going on. Sound is a 4D phenomenon (x/y/z/t) and the oscilloscope shows us only a slice in 2D.

It must seem like I'm bouncing around and working on unrelated ideas. The underlying thread in all of them, though, is the search for bits of simplicity that carry information - to humans, generally - that transcend all of the nitty gritty analysis that we deep-dive into, then, falsely believe that we've figured it all out.

Example: COPY/PASTE makes my life easier. DRY makes me work harder. Can I make the machine do the hard, repetitive work for me? We seem to be stuck in the 1950s where we - humans - are required to figure out how to manually arrange code by not using COPY/PASTE, because, in the 1950s we didn't know how to get machines to recognize similar chunks of code for us, and, we were afraid of ballooning the costs of CPU time by using the machines to help us.



