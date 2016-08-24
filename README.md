# Picnic-Grid
A lightweight, easy to use yet versatile, mobile-first responsive grid system. 


## What is it?
Picnic is a simple, versatile, powerful little Responsive Grid System. 
It is meant to be simple, so it does not do a bunch of stuff, however it does pretty well what it was designed for. 

## Why a new Grid System?
Ok. It comes to no surprise that I am not a huge fan of Bootstrap. There, I said it! Don't get me wrong. I appreciate what it does, but lets face it, there are other great options out there. 

Picnic is a combination of different approaches. While it is still (12) column based, it's also layout-driven. In other words, you can specify exactly how it looks at different breakpoints, which gives you a lot of versatility and combinations when building your layouts. As an example, the same set of 'cells' can behave as 3 (100% width) rows on mobile devices, 2-5-5 in tablets and 4-4-4 in desktop screens. 

## Why is it better?
I actually never said it was better. It is also not aiming to be the best nor the 1-size-fits-all solution. 
It is, however, designed to easily build your layout for different resolutions while handling exactly how it should look in each one of these. 

## Features
* 12 columns
* Fluid & responsive
* Mobile first
* Define layout on breakpoints

## Getting started
Awesome! If you've read this far and still got your attention, must be interested in how to implement this grid. 
First things first. As in any responsive website, make sure you do indicate so with the viewport meta tag inside your <head> element:
```
<meta name="viewport" content="width=device-width, initial-scale=1">
```

Second step: Load the picnic-grid.css which can be found inside the `/dist` folder. Easy-peasy so far, right?
Don't worry! It won't get more complicated than this, I promise. 

## Building your layout
At this point, we are ready to start using the grid. The basic HTML markup is as follows:

```html
<div class="grid">
    <div class="c-6">
    </div>
    <div class="c-6">
    </div>
</div>
```

The above generates two 50% width columns that are fluid throughout all screen sizes. 

### Wait! Isn't this Grid Responsive?
It sure is. As mentioned earlier, you can control how it looks at different breakpoints. 
This means that (different from many Grid systems [and similar to a few others]) you will have to define when and how it breaks. 

E.g. If you want the above to be 2 rows in mobile and 2 (50%) columns starting at tablets, you can do the following: 
```html
<div class="grid">
    <div class="c-12 c-t-6">
    </div>
    <div class="c-12 c-t-6">
    </div>
</div>
```

Does it make sense?

Lets do another example. For this, we want to have 3 rows in mobile, 1 row and 2 50% columns in tablets, and 3 (33.33%) columns in desktop. Can you picture it?
Here is how the markup would look like:
```html
<div class="grid">
    <div class="c-12 c-d-4">
    </div>
    <div class="c-12 c-t-6 c-d-4">
    </div>
    <div class="c-12 c-t-6 c-d-4">
    </div>
</div>
```

## Vertical stack

If you are thinking: "Nah! I like how the columns stack vertically in Bootstrap" Ok, ok, I get it. That is also supported, though it is not the default behavior. By default, as you've seen, the grid is fluid and you can add classes to the columns to tell'em when to break. However, if you want, for instance, 50%-width columns that stack vertically in mobile screen sizes, you can do as follows:

```html
<div class="grid mobile-stack">
    <div class="c-6"></div>
    <div class="c-6"></div>
</div>
```

This will display as 2 rows in mobile and 2 columns in larger screens. In other words, the above will have the same result as: 

```html
<div class="grid">
    <div class="c-12 c-t-6"></div>
    <div class="c-12 c-t-6"></div>
</div>
```

You can also tell them to stack vertically in mobile and tablet, and display as 2 columns in larger screens:

```html
<div class="grid mobile-stack">
    <div class="c-6"></div>
    <div class="c-6"></div>
</div>
```


## Additional classes

I know this is, so far, too simple for you. I am working to quickly add more alternatives to the grid, such as hiding elements at certain resolutions, using offsets, etc. Keep in mind that I've just started working on this (See the date of the first commit) and make sure I will make this better, yet. 

So far, here are a couple of alternatives for you:
#### No gutter
Picnic Grid adds, by default, a 10px gutter between columns. This is, however, optional. If you don't want that gutter, simply add a `no-gutter` class to your `grid` div as follows:

```html
<div class="grid no-gutter">
    <div class="c-6"></div>
    <div class="c-6"></div>
</div>
```

#### Same height
It is known that having same-height columns is one of the most obnoxious things to accomplish with HTML & CSS. 
There are a few approaches we can follow to accomplish this result. Picnic Grid implements a "funny" solution I borrowed from the Internet, which plays with the bottom's margin and padding. 
Is it the true and only solution? No, no it isn't, but I am sure it will come handy more than one time. 
Same as the example above, simply add a `same-height` class to your grid element:
```html
<div class="grid same-height">
    <div class="c-6"></div>
    <div class="c-6"></div>
</div>
```

## Preview
Ok, so demo is still not quite ready, but some examples can be found at the index.html file. Simply download/clone the project and see the grid in action by opening the index.html file in your browser. (Hope you are not using IE, seriously!).


## Contributing
Yes, please! Did I mention I'm just getting started? This means (among other things) the contribution guidelines are not still defined. Please give me some time to develop those because I do want us to work together, but we shall do it carefully, don't ya think? For now, if you have any feedback, feel free to create an issue and I will be more than glad to take a look at it. 
I appreciate in advance your interest. I truly do. 


## Copyright & License
Copyright 2016 fsevilla. Code released under the [MIT license](https://github.com/fsevilla/Picnic-Grid/blob/master/LICENSE)