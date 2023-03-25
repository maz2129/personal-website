<script>
	import {backInOut, linear} from 'svelte/easing';

	let springy = false;
	$: duration = springy ? 2000 : 1000;
	$: easing = springy ? backInOut : linear;
	$: options = {duration, easing, times: 2};

	let show = false;
	const toggle = () => show = !show;
	
	function spin(node, options) {
		const {times = 1} = options;
		return {
			...options,
			// The value of t passed to the css method
			// varies between zero and one during an "in" transition
			// and between one and zero during an "out" transition.
			css(t) {
				// Svelte takes care of applying the easing function.
				const degrees = 360 * times; // through which to spin
				return `transform: scale(${t}) rotate(${t * degrees}deg);`;
			}
		};
	}
</script>



{#if show}
    
	<div class="center" transition:spin={options}>
		<div class="content">
            <img src="images/headshot.jpg" alt="headshot"/>
            <p on:click={toggle}>Click here to close</p>
        </div>
	</div>
{:else}
    <h4 on:click={toggle}>Curious to see what I look like? Click here</h4>
{/if}

<style>
	.center {
		/* This has a width and height of zero and is
		   only used to center the content on the page. */
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}

	.content {
		/* for rotation about center */
		position: absolute;
		transform: translate(-50%, -50%);
		/* text-align: center; */
		width: 300px;
        background-color: white;
        border: 2px black;
        border-style: solid;
        z-index: 100;
	}

    img {
        width: 100%;
    }

    p {
        cursor: pointer;
    }

    h4 {
        text-decoration: underline;
        font-weight: normal;
        color: #383838;
        margin-bottom: 30px;
        cursor: pointer;
    }
</style>