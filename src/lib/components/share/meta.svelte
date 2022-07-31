<script>
    export  let description = "default des";
    export  let title = " default title";
    export let url = "default url";
    export let og_image = "default og image";
    export let keywords = "defautl, keywords";
    let siteName = "https://wwww.dz1997.cn";
</script>
<svelte:head>
    <meta name="description" content={description}/>
    <meta name="keywords" content={keywords}/>
    <meta property="og:title" content={title}/>
    <meta property="og:description" content={description}/>
    <meta property="og:url" content={url}/>
    <meta property="og:image" content={og_image}/>
    <meta property="og:type" content="website"/>
    <meta property="og:site_name" content={siteName}/>
    <title>{title}</title>
</svelte:head>