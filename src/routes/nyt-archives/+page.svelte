<script>
    // import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, Checkbox, TableSearch } from 'flowbite-svelte';
    import opinions_df from './labeled_headlines.json'
</script>


<div>NYT Archives</div>

<div>
    {#each opinions_df as {group_name, count}, index}
        <div>{group_name}</div><div>{count}</div>
    {/each}
</div>


<style>
    div {
        text-align: center;
        width: 800px;
        margin: auto;
    }
</style>