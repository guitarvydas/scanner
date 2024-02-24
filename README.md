Yes, but that's not the whole story. It's an under-simplification. I'm not focussed on a single technology, but am playing with a bunch of technologies. Parsing HTML is just one aspect. I'm trying to explain why and will provide more info. In the meantime,

Here's a silly, overwrought example:
```
function xyz () {
    var <mark><i>I <b>want</b> a </i>hamburger</mark>;
    const 👍! = true;
    <mark><i>I <b>want</b> a </i>hamburger</mark> ⇐ 👍!;
}
```

looks like this in my editor (Obsidian):
![[Screenshot 2024-02-23 at 10.46.43 PM.png]]

---

I'm not focussed on a single technology, but am playing with a bunch of technologies. Parsing HTML is just one aspect.

I'm looking for little things - simple things - that already exist and can drastically change the way we *think*. 0D is one such thing (i.e. FIFO-based message-sending in addition to LIFO-based function calls). Tokening HTML and using the tokens to form programming languages is another such thing.

HTML already exists and has worked out a lot of the kinks in representing text. 

XML and SVG are next, after you can parse HTML. Note that XML and SVG can represent diagrams. This, to me is significant, since it can provide a big jump in the way that we are able express programs to other humans. 

We *still* need to translate these more-expressive programs down to instructions that machines can understand. We have existing tools for doing such conversions. The interesting and difficult work is figuring out how to map more-expressive programs into forms that can be compiled to machine code by existing tools.

Simply being able to parse XML and SVG means that we can parse DPLs - Diagrammatic Programming Languages. New vistas. A small change in perspective can lead to huge effects in the way we are allowed to think.

Does that lead to new ways for express things and does it lead to totally new ideas? I argue yes.

The fact that CPU ICs are sequential, step-wise interpreters of byte-oriented data, does not mean that all higher level human-oriented programming languages, also, need to be sequential and step-wise and grid oriented and read strictly from left-to-right top-to-bottom. It only means that we need to *convert* our higher-level programs into sequential, step wise instructions that can be understood by relatively dumb machines. The goal is to automate such conversions. It seems to me that our current crop of programming languages places the onus of doing much of the heavy lifting onto humans instead of using machines to do the work for us. 

A simple example of having humans do too much work that should be automated is the aspect of DRY - Don't Repeat Yourself. We have discovered that a Prime Directive in programming is that of ensuring that we need to maintain only one copy of each set of instructions, lest we forget to update all copies when we change a script. Allowing two copies of part of a program to get out of synch leads to mysterious bugs and difficult debugging sessions. Yet, humans like to use COPY/PASTE to create programs. Academics even have a phrase for this kind of thing - "standing on the shoulders of giants". At present, we expect humans to stop using COPY/PASTE and to use *abstraction* instead to fight the scourge of multiple, out of synch copies of parts of programs. Why don't we automate this process and have machines figure this stuff out for us? We should be able to slap programs together using bits of other programs and have machines propagate changes / updates to the bits. 

5 year-olds do this kind of thing all of the time using LEGO® blocks. Programmers are failing to work this way. 

Why? 

It should be obvious that our attempts at re-using program bits is failing and causing long chains of dependencies and code bloat and brittleness. 

Why?

I argue that this is not due to the hand-waving argument of "essential complexity", but, is something deeper. Having been exposed to schooling in Physics, I know that we can describe and control any complicated thing, but, we need to allow ourselves to use more than one way to talk about such things. We can't stick to only one notation - especially when such a notation was designed to help describe some other aspect of the problem space. Such laser-focussed notations are designed by throwing away complicated bits of the problem that get in the way of thinking about a specific aspect of the problem. When you figure out and can explain the specific aspect of the problem, it doesn't mean that you've figured out how to describe the *whole* problem space, but, only a small slice of it.

In my mind, the idea of a "general purpose programming language" is a chimera. You simply cannot use a 2D programming language to describe all that is involved in a 4D phenomenon, like that of how CPUs work and how to build devices using computers. You can nibble away at the problem space by using multiple 2D notations. You must remember, though, that a written notation (2D) might not work well in all cases. For example, consider Richard Feynman. He stopped using equations for a while and invented Feynman diagrams to help him think through and describe one particular aspect of physics. 

Today, programming is done using, essentially, a single notation which cannot be "general purpose" enough. Synchronization is hard-wired into the bowels of most popular programming languages. We play whack-a-mole with concepts like asynchronousity and security. If we just want to play Tetris, we need to use expensive laptops and use bloated operating systems, instead of simply walking into Radio Shack and buying a Tetris handheld unit off the shelf for $7.99. If we try to build Tetris hand-helds using Arduinos, we end up using bloated operating systems that have synchronousity and memory-sharing built into them. 

Something is wrong with this picture. 

What's going on?

Programming and computers were simple in the 1980s, but have bloated into expensive behemoths today.

Why?

Data has certainly grown in size, e.g. pictures contain many more bits, LLMs use scads of training data bytes and time. This does not mean, though, that our programs have needed to become significantly fatter, but, they have. Why?

# Tetris
A Tetris hand-held needs what?
- a display, or an HDMI port, or Air Play, or bluetooth, or ...
- a couple of keys (left, right, enter, power)
- a bit of electronics
- a few bytes of persistent memory
- a battery or power connection
- etc.

These items should all be LEGO® blocks readily available off the shelf in a programming shop

Tetris does not need:
- a file system
- a USB driver
- internet
- email, browsing
- Linux

Why does a Tetris programmer need to know about monads, futures, promises, etc.?

# Pong

In 1972, Pong fit onto one C sized page of paper and a clone circuit was published in a magazine containing other articles.

# How?

- first principles thinking
- assume failure, try a lot of different ideas and know that only a few will work out

# What Non-Sequential Programming Languages Already Exist?

- Prolog
- HTML
# What Non-Sequential, Asynchronous Systems Already Exist?

- networking (esp. network protocols)
- blockchain

# Back to Parsing HTML - Silly Example

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

# The Purposes of Programming

The purposes of programming are:
1. to make a machine do what you want
2. to explain to other humans what you wanted to accomplish.

# When All You've Got Is A Hammer...

I see 1950s-style byte-oriented scanning and function-based thinking as being severely limiting. When all you've got is a hammer, everything looks like a nail. When all you've got is a function-based notation, then everything looks like a function. Functions are useful, but they are not the best way to explain some things. Ask Feynman why he invented Feynman diagrams.

Function-based notation is useful, but, it does not describe how CPUs work. For example, the concept of RAM requires mutation. Decreeing that mutation is bad is a useful simplifying assumption, but, it does not describe how CPUs work at a fundamental level. I think that it is necessary to understand how CPUs work - maybe from several points of view. I believe that knowing this will help us devise other useful notations for using CPUs and computers (Reprogrammable Electronic Machines). Knowing what the atoms are will help us devise interesting molecules.

# What Don't Know Yet?

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

# Trapped in a Corner

We seem to fall into a trap where, once we find one notation that describes one aspect of a phenomenon, we begin believing that we understand the whole phenomenon. Like the prevalent belief that Maxwell's Equations define all of electrical phenomena (they don't). Like seeing a 2D representation of sound as a sine wave on an oscilloscope and thinking that we understand what's going on. Sound is a 4D phenomenon (x/y/z/t), but, oscilloscopes show us only a slice in 2D. Treating sound in a 2D manner is useful and has resulted in many useful inventions, but, it doesn't explain everything about how this stuff works.

It must seem like I'm bouncing around and working on unrelated ideas. The underlying thread in all of them, though, is the search for bits of simplicity that carry information - to humans, generally - that transcend all of the nitty gritty analysis that we deep-dive into, then, falsely believing that we've figured it all out.

Example: COPY/PASTE makes my life easier. DRY (Don't Repeat Yourself, manifesting itself as more and more excessive amounts of abstraction) makes me work harder. Can I make the machine do the hard, repetitive work for me? We seem to be stuck in the 1950s where we - humans - are required to figure out how to manually arrange code by not using COPY/PASTE, because, in the 1950s we didn't know how to get machines to recognize similar chunks of code for us, and, we were afraid of ballooning the costs of CPU time when using machines to help us. Before the advent of personal computers, CPU time was strictly meted out and budgeted. Budget concerns were central to the design of programming languages and operating systems. We haven't altered our approach to accommodate the advent of cheaper CPUs and memory (Arduinos, Raspberry PIs, etc.). We still use programming languages that are designed to optimize for CPU time instead of optimizing for human-time. If you are an end-user, you care about CPU time and cost, but, if you are a developer, you care about saving your own time and getting computers to help you instead of making you work harder.



ref: Bennet multiple-use book, Framing Software Development
ref: Cordy and ??? NiCaD
ref; FDD


VM

While pondering:
- VM is good for creating Sybil attack software
- VM is good for sharing memory, but, sharing memory is verboten
I would be interested in what struck you as ridiculous...
