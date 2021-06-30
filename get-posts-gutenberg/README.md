# Get Posts and Gutenberg styles

* State: Experimental
* Purpose: Use Gutenberg styles
* Result: Partial success
* Dependency: Editorplus plugin


## Partial solution

How to get the Gutenberg styles is hard to find i the WordPress documentation.

In this sample the styles from Twentytwentyone are copied. Here you get the feel and look of that theme. But you don't get the styles from the Gutenberg blocks.

However, after adding the gutenberg-frontend.css the Gutenberg blocks seem to work as they are supposed to. The script is probably found here:

https://YOUR-SITE.COM/wp-content/plugins/editorplus/dist/gutenberg-frontend.css

In this theme the gutenberg-frontend.css is a copy-paste version, so if the original is updated this vervion eventually will be deprecated.

## Troubleshooting

Q: Works with multimusen.dk not with a subsite on the same domain: multimusen.dk/wpsandbox ...

A: Make sure that your theme use the theme *twentytwentyone*.


## Findings

* twtwone.css = optional theme styles.
* gutenberg-frontend.css = the blockbuilder styles.
