<template>
  <div class="stats-outer scroll-reveal">
    <div class="stats-item">
      <i class="fa fa-school stats-icon"></i>
      <span style="font-size: 32px; font-weight: 400">9000+</span>
      <span
        style="font-size: 14px; font-weight: 600; color: var(--color-accent)"
        >STUDENTS & YOUTH</span
      >
    </div>
    <span class="stats-div"></span>
    <div class="stats-item">
      <i class="fa fa-heartbeat stats-icon"></i>
      <span style="font-size: 32px; font-weight: 400">5000+</span>
      <span
        style="font-size: 14px; font-weight: 600; color: var(--color-accent)"
        >FAMILIES</span
      >
    </div>
    <span class="stats-div"></span>
    <div class="stats-item">
      <i class="fa fa-female stats-icon"></i>
      <span style="font-size: 32px; font-weight: 400">3000+</span>
      <span
        style="font-size: 14px; font-weight: 600; color: var(--color-accent)"
        >WOMEN</span
      >
    </div>
  </div>
</template>

<style>
.stats-outer {
  background: var(--color-gradient);
  width: 100%;
  height : fit-content;
  display: flex;
  flex-direction: row;
}

.stats-div {
  width: 1px;
  height: 240px;
  background: rgba(255, 255, 255, 0.2);
}

.stats-item {
  display: flex;
  height: 240px;
  flex-grow: 1;
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  justify-content: center;
  vertical-align: middle;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  transition: background 0.25s;
}

.stats-icon {
  font-size: 48px;
  margin-bottom: 16px;
  opacity: 1;
}

.stats-item:hover {
  background: rgba(255, 255, 255, 0.1);
}

@media screen and (max-width: 840px) {
  .stats-outer {
    flex-direction: column;
  }

  .stats-item {
    width: 100%;
  }

  .stats-div {
    width: 100%;
    height: 1px;
  }
}
@media screen and (min-width: 840px) {
  .stats-outer {
    height: 180px;
  }
  .stats-item {
    height: 180px;
  }
}
</style>
