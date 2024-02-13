  <script>
    import { AccordionItem, Accordion } from 'flowbite-svelte';
    import article_groups from './labeled_articles.json'
  </script>
  
<div class="container">
  <h3>Opinion Topics: Nov 2019</h3>
</div>

<div class="items center">
  <div class="container">
    <Accordion>
      {#each article_groups as {group_name, articles}}
      <AccordionItem>
        <span slot="header">{group_name}</span>
        {#each articles as a}
          <li class="link">
            <a href={a.web_url} class="font-medium text-blue-600 dark:text-blue-500 hover:underline">{a.headline}</a>
          </li>
        {/each}
      </AccordionItem>
      {/each}
    </Accordion>
  </div>
</div>

<style>
  .container {
    width: 800px;
    margin: auto;
  }
</style>