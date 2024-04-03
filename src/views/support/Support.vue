<template>
    <div class="route-page">
        <NavBar selecteditem="support" />
        
        <div class="subsection subsection-head mob-center">
            <h1>Support Yasham</h1>
            <span class="underbar"></span>
            <p>
                You can support our work through donations or by volunteering or mentoring with us.
            </p>
            <div style="height: 64px;"></div>
        </div>

        <WaveDivider position="top" foreground="gradient" background="#F5F5F5" />

        <div class="subsection" style="background: #F5F5F5">
                <div class="card-list-elevate">
                    <div class="card-elevate" style="padding-bottom: 24px; animation: enter-bottom 0.4s backwards;">
                        <i class="fa fa-donate card-elevate-icon"></i>
                        <h2>Donate</h2>
                        <p style="padding: 0px 16px; line-height: 24px;">
                            Help us, help those in need!
                            <br>
                            <br>
                            Yasham Foundation is a Public Charitable Trust registered under the Bombay Public Trust Act, 1950.
                            <br>
                            <br>
                            All donations are eligible for a 50% tax exemption under section 80G of the Income Tax Act.
                            <br>
                            <br>
                            <div class="donate-field">
                                <span style="font-weight: 600; flex-grow: 1; padding-right: 16px;">Name: </span>
                                <span>Yasham Foundation</span>
                            </div>

                            <div class="donate-field">
                                <span style="font-weight: 600; flex-grow: 1; padding-right: 16px;">Name of Bank: </span>
                                <span>IDFC First Bank</span>
                            </div>
                            
                            <div class="donate-field">
                                <span style="font-weight: 600; flex-grow: 1; padding-right: 16px;">Branch: </span>
                                <span>Prabhadevi</span>
                            </div>

                            <div class="donate-field">
                                <span style="font-weight: 600; flex-grow: 1; padding-right: 16px;">Account Number: </span>
                                <span>10034997726</span>
                            </div>

                            <div class="donate-field">
                                <span style="font-weight: 600; flex-grow: 1; padding-right: 16px;">IFSC Code: </span>
                                <span>IDFB0040102</span>
                            </div>

                            <span style="padding: 16px; padding-bottom: 0px;">We also accept donations in cash or kind. Contact Us!</span>
                        </p>
                    </div>

                    <div class="card-elevate" style="padding-bottom: 24px; animation: enter-bottom 0.4s backwards;">
                        <i class="fa fa-hands-helping card-elevate-icon"></i>
                        <h2>Volunteer</h2>
                        <p style="padding: 0px 16px; line-height: 24px;">
                            An  NGO’S most important asset is its volunteer base. They form the pulse of Yasham Foundation. 
                            <br>
                            We have several departments, where all your suggestions and contributions will be appreciated. They include the Teaching department, Content Curation, Social media management, Designing, Videography, Photography, Editing, and Research work. This is the perfect opportunity for everyone to volunteer, including college students to fulfill their curriculum requirements. 
                            <br><br>
                            All documents such as certifications and letters of recommendation will be provided according to the needs of the Student Volunteer.
                            <br><br>
                            If you are interested in either volunteering or mentoring, please contact us at:
                            <div class="donate-field">
                                <span style="font-weight: 600; flex-grow: 1; padding-right: 16px;">Email: </span>
                                <span>info@<wbr>yasham<wbr>foundation<wbr>.org</span>
                            </div>

                            <div class="donate-field">
                                <span style="font-weight: 600; flex-grow: 1; padding-right: 16px;">Mobile: </span>
                                <span>+91 9920471772</span>
                            </div>
                        </p>
                    </div>
                </div>
            </div>


        <Footer />
    </div>
</template>

<script>
    import NavBar from '@/components/NavBar.vue'
    import Footer from '@/components/Footer.vue'
    import WaveDivider from '@/components/WaveDivider.vue'

    export default {
        components: {
            NavBar,
            Footer,
            WaveDivider
        }
    }
</script>

<style>
    .card-list-elevate{
        width: 100%;
        margin-top: -160px;
        transform: translateZ(2px);
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .card-elevate{
        max-width: 480px;
        width: 100%;
        background: #FFF;
        min-height: 320px;
        margin: 0px 32px;
        flex-grow: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 64px 32px;
        border-radius: 8px;
    }

    .card-elevate-icon{
        font-size: 48px; 
        color: var(--color-primary);
        padding: 32px; 
        background: #fe8a0030; 
        border-radius: 50%;
    }

    .donate-field{
        display: flex;
        flex-direction: row;
        justify-content: left;
        align-items: left;
        width: 100%;
        padding: 4px 16px;
    }
    @media screen and (max-width: 960px) {
        .card-list-elevate{
            flex-direction: column;
            align-items: center;
        }

        .card-elevate{
            margin: 32px 0px;
        }
    }
</style>