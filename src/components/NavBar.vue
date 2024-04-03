<template>
  <div id="navholder" :mnav-active="mnavActive">
    <div id="navbar" class="navbar">
      <img src="../assets/images/logo_icon.png" class="navlogo" />
      <div>
        <router-link to="/" class="navbtn">Home</router-link>
        <div class="dropdown">
          <span class="navbtn">Our Story</span>
          <div class="dropdown-content">
            <router-link to="/our-team" class="mnav-item">Our Team</router-link>
            <router-link to="/our-mission" class="mnav-item"
              >Our Mission</router-link
            >
            <router-link to="/founders-vision" class="mnav-item"
              >Founder's Vision</router-link
            >
          </div>
        </div>
        <div class="dropdown">
          <span class="navbtn">Our Work</span>
          <div class="dropdown-content">
            <router-link to="/yasham-centre-model" class="mnav-item"
              >Yasham Centre Model</router-link
            >
            <router-link to="/saathi-haath-badhana" class="mnav-item"
              >Saathi Haath Badhana</router-link
            >
            <router-link to="/sunn-zara" class="mnav-item"
              >Sunn Zara</router-link
            >
            <router-link to="/hum-honge-kaamyab" class="mnav-item"
              >Hum Honge Kaamyab</router-link
            >
            <router-link to="/swacch-english-mission" class="mnav-item"
              >Swacch English Mission</router-link
            >
          </div>
        </div>
        <div class="dropdown">
          <span class="navbtn">Our Impact</span>
          <div class="dropdown-content">
            <router-link to="/testimonials" class="mnav-item"
              >Testimonials</router-link
            >
            <div class="sub-dropdown">
              <span class="mnav-item">Video</span>
              <span class="mnav-item">Written (by Volunteers/Mentors)</span>
            </div>
            <router-link to="/yasham-in-news" class="mnav-item"
              >Yasham in News</router-link
            >
          </div>
        </div>
        <div class="dropdown">
          <span class="navbtn">Get Involved</span>
          <div class="dropdown-content">
            <div class="sub-dropdown">
              <span class="mnav-item">Sponsor</span>
              <router-link to="/sponsor-a-student" class="mnav-item"
                >a student</router-link
              >
              <router-link to="/sponsor-a-project" class="mnav-item"
                >a project</router-link
              >
              <router-link to="/sponsor-in-kind" class="mnav-item"
                >in kind</router-link
              >
              <router-link to="/sponsor-in-donation" class="mnav-item"
                >in donation</router-link
              >
            </div>
            <router-link to="/volunteer-intern" class="mnav-item"
              >Volunteer & Intern</router-link
            >
            <router-link to="/teach" class="mnav-item">Teach</router-link>
            <router-link to="/mentor" class="mnav-item">Mentor</router-link>
          </div>
        </div>
      </div>
      <a class="mnavbtn" @click="toggleNav">
        <i
          :class="
            mnavActive ? 'fas fa-times icon fa-xs' : 'fas fa-bars icon fa-xs'
          "
        ></i>
      </a>
    </div>
    <div id="mnav">
      <router-link to="/" class="mnav-item">Home</router-link>
      <div class="dropdown" v-for="(section, index) in sections" :key="index">
        <span class="mnav-item" @click="toggleDropdown(section.name)">
          {{ section.name }} <i class="fas fa-chevron-down"></i>
        </span>
        <div
          class="dropdown-content"
          :class="{ active: activeDropdown === section.name }"
        >
          <router-link
            v-for="(link, idx) in section.links"
            :key="idx"
            :to="link.route"
            class="mnav-item2"
          >
            {{ link.label }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      mnavActive: false,
      activeDropdown: null,
      sections: [
        {
          name: "Our Story",
          links: [
            { label: "Our Team", route: "/our-team" },
            { label: "Our Mission", route: "/our-mission" },
            { label: "Founder's Vision", route: "/founders-vision" },
          ],
        },
        {
          name: "Our Work",
          links: [
            { label: "Yasham Centre Model", route: "/yasham-centre-model" },
            { label: "Saathi Haath Badhana", route: "/saathi-haath-badhana" },
            { label: "Sunn Zara", route: "/sunn-zara" },
            { label: "Hum Honge Kaamyab", route: "/hum-honge-kaamyab" },
            {
              label: "Swacch English Mission",
              route: "/swacch-english-mission",
            },
          ],
        },
        {
          name: "Our Impact",
          links: [
            { label: "Testimonials", route: "/testimonials" },
            { label: "Yasham in News", route: "/yasham-in-news" },
          ],
        },
        {
          name: "Get Involved",
          links: [
            { label: "Sponsor a Student", route: "/sponsor-a-student" },
            { label: "Sponsor a Project", route: "/sponsor-a-project" },
            { label: "Sponsor in Kind", route: "/sponsor-in-kind" },
            { label: "Sponsor in Donation", route: "/sponsor-in-donation" },
            { label: "Volunteer & Intern", route: "/volunteer-intern" },
            { label: "Teach", route: "/teach" },
            { label: "Mentor", route: "/mentor" },
          ],
        },
      ],
    };
  },
  methods: {
    toggleNav() {
      this.mnavActive = !this.mnavActive;
    },
    toggleDropdown(sectionName) {
      this.activeDropdown =
        this.activeDropdown === sectionName ? null : sectionName;
    },
  },
};
</script>

<style scoped>
/* Add your scoped styles here */

#navholder {
  z-index: 20;
}

#navbar {
  width: 100%;
  height: 84px;
  background: #fff;
  padding: 0px 96px;
  transition: all 0.25s;
  z-index: 20;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navlogo {
  height: 84px;
  padding: 16px;
  float: left;
}

.mnavbtn {
  font-size: 2rem;
  font-weight: 600;
  line-height: 84px;
  float: right;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-primary);
}

.icon {
  color: var(--color-primary);
}

#mnav {
  position: absolute;
  top: 84px;
  width: 100%;
  background: #fff;
  transform: scaleY(0);
  transition: all 0.25s;
  transform-origin: 0px 0px;
  display: none;
  z-index: 30;
}

.mnav-item {
  width: 100%;
  padding: 24px 32px;
  display: block;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.8);
  border-top: solid #00000010 1px;
  cursor: pointer;
  transition: all 0.25s;
  background-color: #fff;
  z-index: 2;
}
.mnav-item2 {
  width: 100%;
  padding: 24px 32px;
  display: block;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  color:black;
  border-top: solid #00000010 1px;
  cursor: pointer;
  transition: all 0.25s;
  background-color: rgb(255, 250, 245);
  z-index: 2;
}

.mnav-item:hover {
  color: var(--color-primary);
  background: #f76f020b;
}

.mnav-item:active {
  color: var(--color-primary);
  background: #f76f0220;
}

.navbtn {
  height: 84px;
  line-height: 84px;
  padding: 0px 16px;
  float: right;
  font-size: 14px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.7);
  cursor: pointer;
  text-decoration: none;
  transition: all 0.25s;
  text-align: center;
  user-select: none;
}

.navbtn::after {
  background: var(--color-primary);
  content: " ";
  display: block;
  width: 100%;
  height: 4px;
  margin-top: -2px;
  border-radius: 2px;
  transform: scaleX(0);
  transition: transform 0.25s;
}
.navbtn:hover::after {
  transform: scaleX(0.95);
}

.navbtn:active::after {
  transform: scaleX(0.6);
}

.navbtn[selected] {
  color: var(--color-primary);
}
.navbtn[selected]::after {
  transform: scaleX(1);
}

.navbtn[selected]:active::after {
  transform: scaleX(0.8);
}

.navbtn:hover {
  color: var(--color-primary);
  background: #f76f020b;
}

.navbtn:active {
  background: #f76f0220;
}

@media screen and (max-width: 960px) {
  #navbar {
    padding: 0px 32px;
  }
}

@media screen and (max-width: 840px) {
  #navbar {
    padding: 0px 0px;
  }
  .navbtn {
    display: none;
  }
  .mnavbtn {
    display: block;
    position: absolute;

    right: 10px;
  }

  #mnav {
    display: block;
  }

  #navholder[mnav-active="true"] #mnav {
    transform: scaleY(1);
  }

  #navholder[mnav-active="false"] #mnav {
    transform: scaleY(0);
  }
}
#navholder {
  position: relative;
  z-index: 20;
}

#navbar {
  width: 100%;
  height: 84px;
  background: #fff;
  padding: 0px 96px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbtn {
  font-size: 14px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.7);
  cursor: pointer;
  text-decoration: none;
  transition: all 0.25s;
}

.dropdown {
  position: relative;
  display: inline-block;
  border-radius: 30px;
}

.dropdown-content {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 160px;
  /* border-bottom: 1px solid black; */
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  overflow:clip;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 50; /* Ensure dropdown is above other elements */
}
.dropdown-content span,
.dropdown-content a {
  display: block;
  padding: 12px 16px;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.8);
}

.dropdown-content span:hover,
.dropdown-content a:hover {
  /* background-color: #f76f020b; */
  color: var(--color-primary);
}

.dropdown:hover .dropdown-content {
  display: block;
}

.mnavbtn {
  display: none;
}

@media screen and (max-width: 840px) {
  #navbar {
    padding: 0;
    flex-direction: column;
    align-items: flex-start;
  }

  .navbtn {
    display: none;
  }

  .mnavbtn {
    display: block;
    margin-right: 16px;
  }

  .dropdown {
    width: 100%;
  }

  .dropdown-content {
    top: auto;
    left: 0;
    right: 0;
  }

  .dropdown:hover .dropdown-content {
    display: none;
  }

  .dropdown:hover .dropdown-content.active {
    display: block;
  }
}
</style>
