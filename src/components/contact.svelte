<script>
  let linkToggle = false;
  function displayLinks() {
    linkToggle ? linkToggle = false : linkToggle = true;
  }
</script>

<section>
  <h3 on:click="{displayLinks}">Contact Me</h3>
  <div role="group" class={linkToggle ? "contact-links" : "hide-links" }>
    <a
      role="link"
      aria-labelledby="email"
      tabindex="0"
      href="mailto:jack.jackryan@protonmail.com"
      ><span id="email" class="underline">Email</span></a
    >
    <a
      role="link"
      aria-labelledby="github"
      tabindex="0"
      href="https://github.com/JackRyan1989"
      target="_blank"><span id="github" class="underline">Github</span></a
    >
    <a
      role="link"
      aria-labelledby="linkedin"
      tabindex="0"
      href="https://www.linkedin.com/in/johnanthonyryan/"
      target="_blank"><span id="linkedin" class="underline">LinkedIn</span></a
    >
    <a
      role="link"
      aria-labelledby="googleScholar"
      tabindex="0"
      href="https://scholar.google.com/citations?hl=en&view_op=list_works&gmla=AJsN-F5WdgPu5EfV3xkLLaBPa86b5hQZBhkkO_kKHu9_VlrR1MZT2pefwHXmSkfiZjWMOBSTaNFh1Afxd5y225wzHae1b7Xaew&user=mIzNk1QAAAAJ"
      target="_blank"><span id="googleScholar" class="underline">Google Scholar</span></a
    >
  </div>
</section>

<style>
  * {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    vertical-align: baseline;
    background: transparent;
  }

  section {
    display: grid;
    margin: 4% 1% 2% 1%;
  }

  h3 {
    font-size: 1.35rem;
    display: inline-block;
    position: relative;
    text-decoration: none;
    color: black;
    z-index: 1;
    transition-property: color;
    transition-duration: 0.25s;
  }

  h3:hover {
    color: white;
  }

  h3::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0.025em;
    height: 0.1em;
    width: 30%;
    padding: 0px 1px;
    background: black;
    z-index: -1;
    transition: height 0.25s cubic-bezier(0.6, 0, 0.4, 1);
  }

  h3:hover::after {
    height: 1.1em;
  }


  div.contact-links {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  div.contact-links a {
    padding: 0.5em;
    min-height: 1em;
    text-decoration: none;
    text-align: left;
    color: #000;
    border-radius: 0.5em;
  }

  .underline {
    display: inline-block;
    position: relative;
    text-decoration: none;
    color: black;
    z-index: 1;
    transition-property: color;
    transition-duration: 0.25s;
  }

  .underline:hover {
    color: white;
  }

  .underline::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0.025em;
    height: 0.1em;
    width: 100%;
    padding: 0px 1px;
    background: black;
    z-index: -1;
    transition: height 0.25s cubic-bezier(0.6, 0, 0.4, 1);
  }

  .underline:hover::after {
    height: 1.1em;
  }

  .hide-links {
    display: none;
  }

   /* Phone Screen Sizing */
   @media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 568px)
  and (-webkit-min-device-pixel-ratio: 2) {
  
    h3 {
      font-size: 1rem;
    }

    h3::after {
      width: 85%;
    }

    div.contact-links a {
      font-size: .75em;
  }
}

 /* Tablet Screen Sizing */
 @media only screen 
 and (min-device-width: 768px) 
  and (max-device-width: 1024px) 
  and (-webkit-min-device-pixel-ratio: 1) {
    h3::after {
      width: 60%;
    }
  }


</style>
