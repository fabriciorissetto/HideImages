Chrome extension to hide images and change the css to make the pages looks almost like the notepad 

# How to install
Download/unzip the source code and add to the Chrome as an Extension:

![alt tag](http://www.fabriciorissetto.com/wp-content/uploads/2015/10/upload_unpacked_extensio_to_chrome.png)
#
# How to use
Just click in the icon: 

![alt tag](http://www.fabriciorissetto.com/wp-content/uploads/2015/10/before_hide.png)

Puff...

![alt tag](http://www.fabriciorissetto.com/wp-content/uploads/2015/10/after_hide.png)

# How it works
It just adds some styles in the page that hide images and iframes, remove borders and colors, and so on:

```css
img, iframe {
    visibility: hidden !important;
    border: none !important;
}

a, div, table, td, tr, li, ul, input, h1, h2, h3, h4, h5, h6, span, label, p, i, iframe {
    border: none !important;
    font-weight: none !important;
    background: none !important;
    background-color: white !important;
    color: black !important;
}

//...

