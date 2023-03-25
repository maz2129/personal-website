<script>
    export let companyName = ""
    export let imgUrl = ""
    export let className = ""
    export let positionName = ""
    export let timeFrame = ""
    export let description = ""
</script>

<div id="experienceContainer">
    <div id="companyNameColumn">
        <div id="companyNameContainer">
            <p><strong>{companyName}</strong></p>
            <p>{positionName}</p>
            <p id="timeframe"><em>{timeFrame}</em></p>
        </div>
    </div>
    <div id="companyLogoColumn">
        <div id="imageContainer">
            <img src={imgUrl}/>
        </div>
    </div>
</div>

<style>
    #experienceContainer {
        text-align: left;
        display: flex;
        flex-wrap: wrap;
        width: 100%;
    }

    #companyNameColumn {
        width: 80%;
    }
    p {
        margin: 1px
    }
    
    #companyLogoColumn {
        width: 20%;
    }

    #imageContainer {
        height: 50px;
        width: 50px;
        float: right;
    }
    img {
        max-width: 100%;
        height: auto;
    }
</style>