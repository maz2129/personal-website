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
        height: 100%;
        padding-bottom: 10px;
    }

    #companyNameColumn {
        width: 80%;
        height: 100%;
    }
    #companyNameContainer {
        padding-left: 10px;
        padding-top: 10px;
    }
    p {
        margin: 1px
    }
    
    #companyLogoColumn {
        width: 20%;
        height: 100%
    }

    #imageContainer {
        height: 50px;
        width: 50px;
        float: right;
        margin-top: 10px;
        margin-right: 10px;
    }
    img {
        max-width: 100%;
        height: auto;
    }
</style>