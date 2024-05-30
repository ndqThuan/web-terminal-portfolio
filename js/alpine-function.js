// If you ask me why "AlpineJS" and not pure JS or JQuery
// The answer is "I just feel like it"

function terminalApp() {
   return {
      command: "", // recently submited command
      output: "", // return html based on command
      history: [], // store the history of all commands

      runCommand() {
         this.command = this.command.trim().toLowerCase();
         if (this.command !== "") {
            if (this.command === "clear") {
               // Clear terminal instantly
               this.history = [];
               this.output = "";
            } else {
               this.history.push({
                  command: this.command,
                  result: this.getCommandResult(this.command),
               });

               this.updateOutput();
            }
            this.command = "";
         }
      },

      getCommandResult(command) {
         // The terminal will always return the input element with previous command
         // This is the most used element so imma create a seperate variable for it
         const inputWithCommand = `
            <form>
                <label for="command">
                        <span style="color:var(--special)">λ</span> ::<!-- --> <span style="color:var(--primary)">~</span>
                        <span style="color:var(--secondary)">&gt;&gt;</span></label>
                    <input type="text" class="input" style="color:var(--special); font-weight:bold;" value="${command}" disabled>
            </form>
        `;

         const commands = {
            help: `
                <div">
                    ${inputWithCommand}
                    <p> 
                    <div style="display: flex; justify-content: space-between;">
                        <b>whois</b>
                        <p>Who's NDQ Thuan? (It's me!)</p>
                    </div>
                    <div style="display: flex; justify-content: space-between;">
                        <b>whoami</b>
                        <p>Who are YOU?</p>
                    </div>
                    <div style="display: flex; justify-content: space-between;">
                        <b>skill</b>
                        <p>My Tech Toolkit</p>
                    </div>
                    <div style="display: flex; justify-content: space-between;">
                        <b>project</b>
                        <p>Check out what I've built!</p>
                    </div>
                    <div style="display: flex; justify-content: space-between;">
                        <b>resume</b>
                        <p>Wanna see my resume?</p>
                    </div>
                    <div style="display: flex; justify-content: space-between;">
                        <b>contact</b>
                        <p>Let's chat!</p>
                    </div>
                    <div style="display: flex; justify-content: space-between;">
                        <b>clear</b>
                        <p>Fresh start</p>
                    </div>
                    <br>
                    <div>Type one of the above to view. For eg.
                        <span style="color: var(--secondary)">resume</span>
                    </div>
                    </p>
                    <br>
                </div>
            `,

            whois: `
                <div>
                    ${inputWithCommand}
                    <p>
                    <b>Hey there!</b> I'm Quoc Thuan, 
                    a 22-year-old backend developer newbie with a coding itch I gotta scratch. <br>

                    Java and Golang are my programming languages of choice, and I love challenges that make my brain do flips 
                    (in a good way!). <br>

                    Right now, I'm on a kick building blazing-fast websites with H.U.G.O for my blogging adventures because of my overloaded passion. ✍️ <br>
                    </p>
                    <br>
                </div>
            `,

            whoami: `
                <div>
                    ${inputWithCommand}
                    <p>You're the master of your own destiny, 
                        but right now, you're just a person asking existential questions to a web portfolio. 
                        How's that for a plot twist?</p>
                    <br>
                </div>
            `,

            skill: `
                <div>
                    ${inputWithCommand}
                    <p>
                        I can adapt to any coding language situation! 
                        <span style="color: var(--secondary)">Java, JavaScript, HTML, CSS</span> - I speak them all fluently. <br> 
                        Databases are my jam too, from 
                        <span style="color: var(--secondary)">MongoDB</span> to 
                        <span style="color: var(--secondary)">MySQL</span>, I can handle it.  <br>
                        Building things is my passion, and I've got a toolbox overflowing with frameworks like 
                        <span style="color: var(--secondary)">SpringBoot</span> 
                        and <span style="color: var(--secondary)">AlpineJS</span> to make it happen.  <br>
                        Version control with <span style="color: var(--secondary)">Git</span>? Easy peasy. 
                        <span style="color: var(--secondary)">Testing</span> and <span style="color: var(--secondary)">cloud storage</span>? No sweat!  <br>
                        Oh, and did I mention my 
                        <a class="meaning" href="toeic-certificate.pdf" target="_blank">TOEIC</a> score of <b>970</b>? Communication is a superpower too!
                    </p>
                    <br>
                </div>
            `,

            project: `
                <div>
                    ${inputWithCommand}
                    <p>
                    <h3>My Projects</h3>
                    <div>
                        <b style="color:var(--secondary)">Terminal Style Web Portfolio</b> - <b>HTML, CSS, JavaScript, AlpineJS</b>
                        <p class=" meaning">This website is built with AlpineJS, which is 
                        perfect for my portfolio, since I want to keep it light and simple ;)
                        </p>
                    </div>
                    <div>
                        <b style="color:var(--secondary)">Automatic Data
                            Processing System</b> - <b>SpringBoot, Apache POI</b>
                        <p class=" meaning">Unlock coconut power! This system auto-magically cleans BenTre Coconut's Shopee orders, 
                        spitting out clear reports straight to your email. 
                        Now you can spend less time on spreadsheets, more time on coconuts!!!</p>
                    </div>
                    <div>
                        <a href="https://github.com/ndqThuan/edc-koko" target="_blank">
                            <b>EDCKOKO E-commerce Store</b>
                        </a>
                        - <b>SpringBoot, MySQL, Redis, Azure Blob Storage, HTMX, Thymeleaf</b>
                        <p class="meaning">Calling all adventurers! This web app I built lets you gear up for any trip with ease. 
                        It's your one-stop shop for top-notch camping tools and everyday carry essentials.</p>
                    </div>
                    <div>
                        <a href="https://github.com/ThuanNDQ/Syncio" target="_blank">
                            <b>Syncio - Social Media Software</b>
                        </a> - <b>Java Swing, MongoDB</b>
                        <p class="meaning">Built a social media app where you can connect with friends, share updates, 
                        and message like a pro. I even tackled the messaging system solo, showing off my Java and MongoDB skills.</p>
                    </div>
                    </p>
                    <br>
                </div>
            `,

            resume: `
                <div>
                    ${inputWithCommand}
                    <p>This is my <a href="resume.pdf" target="_blank">resume</a>. It ain't much, but it's honest work 🤠</p>
                    <br>
                </div>
            `,

            contact: `
                <div>
                    ${inputWithCommand}
                    <p>
                    <div style="display: flex; justify-content: space-between;">
                        <p>email</p>
                        <span style="color: var(--secondary)">nguyenduongquocthuan@gmail.com</span>
                    </div>
                    <div style="display: flex; justify-content: space-between;">
                        <p>zalo</p>
                        <a class="meaning" href="https://zalo.me/0941143432" target="_blank">Quốc Thuận</a>
                    </div>
                    <div style="display: flex; justify-content: space-between;">
                        <p>github</p>
                        <a class="meaning" href="https://github.com/ndqThuan" target="_blank">ndqThuan</a>
                    </div>
                    <div style="display: flex; justify-content: space-between;">
                        <p>facebook</p>
                        <a class="meaning" href="https://www.facebook.com/ndq.thuan" target="_blank">ndq.thuan</a>
                    </div>
                    <div style="display: flex; justify-content: space-between;">
                        <p>discord</p>
                        <a class="meaning" href="https://discord.com/users/371531413402419200" target="_blank">sodua19</a>
                    </div>
                    <div style="display: flex; justify-content: space-between;">
                        <p>telegram</p>
                        <a class="meaning" href="https://t.me/ndq_thuan" target="_blank">ndq_thuan</a>
                    </div>
                    </p>
                    <br>
                </div>
            `,

            email: `
                <div>
                    ${inputWithCommand}
                    <p>I really like this <span style="color: var(--secondary)">nguyenduongquocthuan@gmail.com</span>
                        email, it's literally my name!!! 
                    </p>
                    <br>
                </div>
            `,

            zalo: `
                <div>
                    ${inputWithCommand}
                    <p>I hope I can have a conversation about 'work' with you on 
                        <a class="meaning" href="https://zalo.me/0941143432" target="_blank">my Zalo</a>.
                    😉
                    </p>
                    <br>
                </div>
            `,

            facebook: `
                <div>
                    ${inputWithCommand}
                    <p><a class="meaning" href="https://www.facebook.com/ndq.thuan" target="_blank">My Facebook profile</a>
                    is very bland, though you might find something interesting there.
                    </p>
                    <br>
                </div>
            `,

            discord: `
                <div>
                    ${inputWithCommand}
                    <p>Oh, you want to talk through 
                        <a class="meaning" href="https://discord.com/users/371531413402419200" target="_blank">my Discord</a>? 
                        I don't use it very often, but it's a nice place to meet new people.
                    </p>
                    <br>
                </div>
            `,

            telegram: `
                <div>
                    ${inputWithCommand}
                    <p>I'm fine with using <a class="meaning" href="https://t.me/ndq_thuan" target="_blank">my Telegram</a> 
                        for works. I'm not really active there, so don't expect me to reply soon.
                    </p>
                    <br>
                </div>
            `,

            github: `
                <div>
                    ${inputWithCommand}
                    <p>I'm working on many projects, but most of them aren't on 
                        <a class="meaning" href="https://github.com/ndqThuan" target="_blank">my GitHub</a>.
                        Working quietly isn't a good thing if you want a job, right?
                    </p>
                    <br>
                </div>
            `,

            sudo: `
                <div>
                    ${inputWithCommand}
                    <h4 style="color:var(--danger)">YOU ARE NOT THE SUPER USER !!!</h4 style="">
                    <br>
                </div>
            `,
         };

         // The visitors usually use "fb" command to check my Facebook profile instead of the full "facebook" command
         // This is to make their life easier when checking my portfolio
         const aliases = {
            // Users experienced with terminal might type "ls" command for the full list
            // This is just my personal preference
            ls: "help",

            // Also my preference ;p
            about: "whois",

            fb: "facebook",
            mail: "email",
            git: "github",
            tele: "telegram",
            disc: "discord",
         };

         if (aliases[command]) {
            command = aliases[command];
         } else if (command.split(" ").includes("sudo")) {
            // Just a hidden easter egg to see if anyone tries to "sudo" my web
            command = "sudo";
         }

         return (
            commands[command] ||
            // Non-existent commands will be notified
            `<div>
                ${inputWithCommand}
                <p class="help-command">Command not found: <span style="font-weight:500;color:var(--danger)">${command}</span></p>
                <p class="help-command">See \`help\` for more info</p>
                <br>
            </div>`
         );
      },

      updateOutput() {
         this.output = this.history
            .map((entry) => {
               return entry.result;
            })
            .join("");
      },
   };
}
