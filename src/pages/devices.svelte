<script>
    import {
        useStore,
        Page,
        Navbar,
        List,
        ListItem,
        Block
    } from 'framework7-svelte'

    // retrieve "products" getter handler value. Initially empty array
    let products = useStore('products', (value) => products = value);
</script>

<Page name="devices">
    <!-- Page Header -->
    <Navbar title="devices"></Navbar>
    <!-- Page content -->
    {#if products.length}
    <List mediaList>
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