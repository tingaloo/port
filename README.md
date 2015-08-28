# port

Note to self.

Before doing anything, change the following lines in layout.erb

```
<%= stylesheet_link_tag "output.min.css" %>
    <%= javascript_include_tag  "output.min" %>
```
to
```
<%= stylesheet_link_tag "custom" %>
    <%= javascript_include_tag  "all" %>
```
Then delete output.min.js

Then start working.

Before commiting changes, run the two commands

```
grunt cssmin
grunt uglify
```

Then change the layout file back. Remove text-align:center from output.min.css

Follow up by running
```
bundle exec middleman build
```

When uploading to Amazon S3, copy index.html, output.min.js, output.min.css from the BUILD folder.
Changes should be live right away.

