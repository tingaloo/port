---
layout: page
title: Music
permalink: /music/
---

<div class="post-col-wrapper">
  <ul class="post-list">
    {% for post in site.categories.music %}

    <div class="post-col">
      <li>
        <a class="box" href="{{ post.url | prepend: site.baseurl }}">

          <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>

          <h2>
            <div class="post-link">{{ post.title }}</div>
            <div class="post-quote">{{ post.quote }}</div>
          </h2>

        </a>
      </li>
      </div>
    {% endfor %}
  </ul>
</div>
