<script>
    import TextBox from "../../../lib/components/TextBox.svelte"
    export let data;
</script>

<h1>{data.casestudy.title}</h1>
<TextBox>{data.casestudy.content}</TextBox>
<img src={data.casestudy.cover} alt="hei"/>