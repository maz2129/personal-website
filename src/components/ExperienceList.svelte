<script>
	import { get } from "svelte/store";
	import Experience from "./Experience.svelte";

    let experienceData = [
        {
            className: "engineering",
            companyName: "Peloton",
            imgUrl: "images/peloton-logo.jpeg",
            positionName: "Software Engineer",
            timeFrame: "Aug 2022 - present",
            description: "Work as a..."
        },
        {
            className: "journ",
            companyName: "Columbia Journalism School",
            imgUrl: "images/columbia-journalism.jpeg",
            positionName: "Research Scholar",
            timeFrame: "Jul 2022 - Aug 2022"
        },
        {
            className: "civic",
            companyName: "GrassRoutes Canvassing",
            imgUrl: "images/grassroutes-logo.jpeg",
            positionName: "Co-Founder and Chief Product Officer",
            timeFrame: "Sept 2019 - Nov 2021"
        },
        {
            className: "journ",
            companyName: "Social Science Research Council",
            imgUrl: "images/ssrc-logo.jpeg",
            timeFrame: "Jan 2021 - May 2021"
        },
        {
            className: "journ",
            companyName: "Incite Lab at Columbia University",
            imgUrl: "images/incite-logo.jpeg",
            timeFrame: "Jan 2022 - May 2022"
        },
        {
            className: "engineering",
            companyName: "COMS 4111 Intro to Databases",
            imgUrl: "images/columbia-logo.jpeg",
            positionName: "Teaching Assistant",
            timeFrame: "Sep 2021 - Dec 2021"

        },
        {
            className: "engineering",
            companyName: "TheTake.ai",
            imgUrl: "images/thetake-logo.jpeg",
            positionName: "Software Engineering Intern",
            timeFrame: "Jun 2022 - Aug 2022"
        },
        {
            className: "journ",
            companyName: "Columbia University Center for Nuclear Studies",
            imgUrl: "images/columbia-logo.jpeg",
            positionName: "Research Fellow",
            timeFrame: "May 2018 - Dec 2018"
        },
        // {
        //     className: "misc",
        //     companyName: "Columbia University",
        //     imgUrl: "images/columbia-logo.jpeg",
        //     positionName: "Student",
        //     timeFrame: "Graduated May 2022"
        // },
    ]

    let toggleOptions = [
        {
            toggleName: "Backend Engineering",
            toggleCode: "engineering"
         },
         {
            toggleName: "Civic Tech",
            toggleCode: "civic"
         },
         {
            toggleName: "Journalism/Research",
            toggleCode: "journ"
         },
        //  {
        //     toggleName: "Miscelanious",
        //     toggleCode: "misc"
        //  }
    ]
    let selectedToggles = []

</script>

<div>
    {#each toggleOptions as t}
        <label class="{t.toggleCode} {selectedToggles.includes(t.toggleCode) ? "selected" : ""}">
            <input type="checkbox" bind:group={selectedToggles} value={t.toggleCode}/>
            {t.toggleName}
        </label>
    {/each}
</div>

<div>
    {#each experienceData as experience}
        {#if selectedToggles.length == 0 || selectedToggles.includes(experience.className)}
        <div class="{experience.className} experienceDiv">
            <Experience {...experience}/>
        </div>
        {/if}
    {/each}
</div>


<style>
    /* Experience toggle buttons */
    input[type="checkbox"] {
        display: none;
    }
    label {
        background-color: white;
        color: black;
        border-radius: 12px;
        font-size: 16px;
        padding: 5px;
    }
    label:hover {
        cursor: pointer;
    }

    .engineering {
        border: 4px solid #E98973;
    }
    label.engineering:hover {
        background-color: #E98973;
    }
    label.engineering.selected {
        background-color: #E98973;
    }

    .civic {
        border: 4px solid #E7D4C0;
    }
    label.civic:hover {
        background-color: #E7D4C0;
    }
    label.civic.selected {
        background-color: #E7D4C0;
    }

    .journ {
        border: 4px solid #88B2CC;
    }
    label.journ:hover {
        background-color: #88B2CC;
    }
    label.journ.selected {
        background-color: #88B2CC;
    }

    .misc {
        border: 4px solid #658EA9;
    }
    label.misc:hover {
        background-color: #658EA9;
    }
    label.misc.selected {
        background-color: #658EA9;
    }

    /* Experience grid */
    .experienceDiv {
        width: 380px;
        margin-top: 0;
        margin-bottom: 30px;
    }

    div {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        width: 800px;
        margin: auto;
        margin-top: 30px;
    }
</style>