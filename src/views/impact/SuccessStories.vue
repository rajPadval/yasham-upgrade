<template>
    <div style="width: 100%;">
        <div class="ss-item" id="ss-animator">
            <div>
                <img :src="successStories[currentStory].image" />
                <h5>{{successStories[currentStory].title}}</h5>
            </div>
            <p style="line-height: 28px" v-html="successStories[currentStory].content"></p>
        </div>
        
        <div class="carousel-select">
            <span v-for="(story, index) in successStories" v-on:click="selectStory(index)" v-bind:key="index" v-bind:selected="currentStory==index"></span>
        </div>
    </div>
</template>

<script>
    let storyImages = [
        require('@/assets/images/image_placeholder3.jpg'),
        require('@/assets/images/image_placeholder2.jpg'),
        require('@/assets/images/image_placeholder3bw.jpg'),
    ]


    export default {
        components: {
        },
        methods: {
            selectStory(index){
                let ssAnimator = document.getElementById("ss-animator");
                ssAnimator.classList.remove("slide-in");
                ssAnimator.classList.add("slide-out");

                setTimeout(()=>{
                    this.currentStory = index;
                    ssAnimator.classList.remove("slide-out");
                    ssAnimator.classList.add("slide-in");
                },250);
                
            }
        },
        data: function(){
            return {
                successStories: [
                    {
                        title: "Pratiksha",
                        content: `
                            A bright young girl named Pratiksha with a dream to work in the medical field, approached our founder, Sunita Mandelia for help with the NEET examination. These highly competitive exams are hard to master without extensive guidance, and decide chances of qualifying for a good institute. Yasham helped Pratiksha with financial aid and enrolled her in ‘Mindsetters’, a coaching centre for NEET along with extra lectures and books to help catch up with other students. As Pratiksha herself says, she feels much more confident now, not only in terms of acing the NEET but also as a person. Today she has realised that she is capable of far more than she thought she was. Pratiksha wants to be a doctor, and what sets her apart from other aspiring doctors is that she wants to help those like her, the same way Yasham helped her. She believes in access to education and healthcare regardless of social status. We are sure that with this mindset, Pratiksha will achieve great things and we are privileged to have played a small part in her journey.
                            `,
                        image: storyImages[0]
                    },
                    {
                        title: "Satyam",
                        content: `
                            Satyam, a student pursuing mechanical engineering, aims to give the GATE examination, a qualifying exam for post graduate engineering or public sector jobs. Initially, he tried self-studying but with the vast syllabus, endless options and lack of funds, almost an entire year was lost when he realised he needed help. He approached our founder, Sunita Mandelia who interviewed him and found his unlimited potential. After career counselling with experts in the field, Satyam found a direction and a defined goal to work towards. Mrs. Mandelia tied up with GATE faculty to coach him, helping him become much more confident and having the courage to reach for the stars. He wishes to secure a job at Bhaba Atomic Research Centre (BARC), known for its exemplary infrastructure and expertise covering a vast range of areas. With the GATE exam fast approaching we are doing everything in our power, right from mock interviews and mentoring to making available any resource he may need, to ensure that he gets the placement he deserves. We are more than positive Satyam will make us proud and achieve great things!
                            `,
                        image: storyImages[0]
                    },
                    {
                        title: "Shivam",
                        content: `
                            Shivam, our student, is a perfect example of the phrase ‘where there’s a will there's a way’.
                            Yasham provided support for Shivam when he required financial assistance with JEE classes. However, Shivam’s testament is that Mrs. Mandelia and Yasham have helped him much more than just providing financial aid, he says, ‘Yasham is the one place that truly focuses on youth development, not only do they go above and beyond to satisfy our educational needs but also focus on holistic development. I needed classes in just Physics, Chemistry and Math but with Sunita Ma’am foresight, I do communication skills (english) classes under the Swach Enligsh Mission as well so that in the future I am able to present myself and not face any language barrier.’ Further, constant support and guidance from his mentors slowly built his confidence and now, Shivam is sure that he will try his level best to have a bright future.
                            However, his story doesn’t stop here. On 24th June, 2020, while juggling his own studies, Shivam helped set up a program for other students in need like him, students who needed assistance in JEE. As he says, Yasham instilled a need in him to give back and help others in any way possible, therefore he charted a way to accelerate the process for JEE aspirants. He made weekly plans and taught classes twice a week. With help from the Foundation, a newspaper covered this initiative and very soon JEE toppers and lecturers approached Yasham offering a much needed helping hand. From there began a wonderful program, for the future engineers and doctors of our nation.
                            Shivam’s character shone through when he humbly stated that his success and the program's success was only the fruit of everyone's hard work and he is privileged to have been a part of it. Shivam is truly a success story for Yasham and we can’t wait to see what the future holds for him!
                            `,
                        image: storyImages[0]
                    },
                    {
                        title: "Gunjan",
                        content: `
                            An aspiring engineer, Gunjan required coaching classes for the highly competitive JEE. Unfortunately her family could not afford them, so when she came across Yasham she gave Sunita Mandelia a call in hopes of finding assistance. On understanding her situation and seeing her potential, Mrs Mandelia helped her secure a seat at Mindsetters. This came as a great blessing to Gunjan and just in the nick of time as she was already a year late. Despite the barrier of time, Gunjan is working diligently to ensure that she scores well and does full justice to her potential. Gunjan says that Yasham has changed her as a person- her mentor, Sunita ma’am has instilled a change in her by teaching them valuable life lessons and embedding the motto ‘stay motivated’ in their minds. Further, she also notes that her communication skills have greatly improved since she joined us. Gunjan was humbled by the unwavering support she received at Yasham and wants to help others like Yasham Foundation. In the words of Gunjan, ‘Yasham plays a very big role in my life and I will always be grateful.’ And the same way, we are honoured to be a part of her road to success!
                            `,
                        image: storyImages[0]
                    },
                    {
                        title: "Baby",
                        content: `
                            Baby was a shy, nervous girl when she first came to us. With immense unrecognised potential, she thought herself to be a weak learner. She always had a small dream, to be a doctor yet she never voiced it because the opinions around her never allowed it. All that changed when she found Yasham. The people at Yasham, especially Sunita Ma’am, helped her realise that it’s okay to have big dreams and even better to have the will to work towards it, despite what others think. This struck a chord with her as soon after, with Yasham’s help she was enrolled in Mindsetters to study for NEET along with English Classes to boost her communication skills. Today, Baby is not bothered about what the world thinks of her because she knows that she will achieve whatever she puts her mind to and we could not be more proud of how far she has come with just a little nudge in the right direction. She dreams big now and confidently says that she wants to study hard enough to be that doctor who can identify the problem with a simple touch. And everyone at Yasham is positive that very soon, Dr. Baby will be the cure to all our ailments!
                            `,
                        image: storyImages[0]
                    },
                    {
                        title: "Sunny",
                        content: `
                            The valour and passion for making a sustainable change in a student's life is what I resonate the most with Sunita Ma'am and Yasham foundation. Yasham foundation is redefining the meaning of compassion by carefully bridging the gap between a student's dream and reality.
                            The entire idea of education is to make a person independent not only financially but also in his mindset. I try to contribute at Yasham by mentoring students in the junior college, help them seek the right career path, and assist them with the best resources to make their journey a smooth one. We make students aware about the career options, which helps them broaden their vision horizon. We have tied-up with many online portals and coaching classes for JEE, NEET, LAW, CA, UPSC amongst others and have mentored more than 200 students in the last six months to pursue their dreams. These students continue to reach out to us and we give personal attention to each of these bright future stars.
                            This experience has added a new dimension to me, as it has helped remove the tendency to form unwanted biases and preconceived notions about people.
                            `,
                        image: storyImages[0]
                    },
                ],
                currentStory: 0
            }
        }
    }
</script>

<style scoped>
    .ss-item{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 32px;
    }

    .ss-item img{
        width: 210px;
        height: 210px;
        object-fit: cover;
        object-position: center;
        border-radius: 50%;
    }

    .ss-item h5{
        width: 210px;
        text-align: center;
    }

    .ss-item p{
        margin-left: 32px;
        font-size: 14px;
        color: rgba(0, 0, 0, 0.75);
    }

    .slide-out{
        animation: slide-out 0.2s;
        animation-fill-mode: forwards;
    }

    .slide-in{
        animation: slide-in 0.2s;
        animation-fill-mode: forwards;
    }

    .fade-out{
        animation: fade-out 0.2s;
        animation-fill-mode: forwards;
    }

    .fade-in{
        animation: fade-in 0.2s;
        animation-fill-mode: forwards;
    }

    .carousel-select{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-top: 32px;
    }

    .carousel-select span{
        display: block;
        width: 12px;
        height: 12px;
        background: var(--color-primary);
        border-radius: 16px;
        margin: 0px 8px;
        opacity: 0.5;
        transform: scale(0.75);
        cursor: pointer;
        transition: all 0.25s;
    }

    .carousel-select span[selected]{
        opacity: 1;
        transform: scale(1);
    }

    @media screen and (max-width: 1080px) {
        .ss-item{
            flex-direction: column;
        }

        .ss-item p{
            margin-left: 0px;
        }
    }

    @keyframes slide-in {
        from {
            opacity: 0;
            transform: translateX(-128px);
        }
        to {
            opacity: 1;
            transform: translateX(0px);
        }
    }

    @keyframes slide-out {
        from {
            opacity: 1;
            transform: translateX(0px);
        }
        to {
            opacity: 0;
            transform: translateX(128px);
        }
    }

    @keyframes fade-in {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @keyframes fade-out {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }
</style>