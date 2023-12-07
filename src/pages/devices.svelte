<script>
    import {
        useStore,
        Page,
        Navbar,
        Subnavbar,
        Searchbar,
        List,
        ListItem,
        Block
    } from 'framework7-svelte'

    // retrieve "products" getter handler value. Initially empty array
    let products = useStore('products', (value) => products = value);
</script>

<Page name="devices">
    <!-- Page Header -->
    <Navbar backLink="Back" title="devices">
        <Subnavbar inner={true}>
            <Searchbar searchContainer=".search-list" searchIn=".item-title" />
        </Subnavbar>
    </Navbar>
    <List strongIos outlineIos dividersIos class="searchbar-not-found">
        <ListItem title="Nothing found" />
    </List>
    <!-- Page content -->
    {#if products.length}
    <List mediaList class="search-list searchbar-found">
        {#each products as product}
        <ListItem
            link="/device/{product.id}" 
            title={product.title}
            subtitle={product.mark}
        >
        <img alt="" slot="media" src={product.image} width="44" />
        </ListItem>
        {/each}
    </List>
    {:else}
    <Block strong>
        Nothing here
    </Block>
    {/if}
</Page>