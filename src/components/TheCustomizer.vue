<script setup lang="ts">

// TODO: Store config in localStorage
import { useLayouts } from '@layouts'

const {
  navbarType, footerType, isVerticalNavCollapsed, appContentWidth, appContentLayoutNav, horizontalNavType,
} = useLayouts()

watch(navbarType, val => {
  horizontalNavType.value = val
})
</script>

<template>
  <!-- 👉 Navbar -->
  <h2 style=" display: inline-block;border-bottom: 1px solid rgb(204 204 204);">
    {{ appContentLayoutNav === 'vertical' ? 'Navbar' : 'Navbar & Horizontal nav' }}
  </h2>
  <div>
    <input
      id="layout-navbar-sticky"
      v-model="navbarType"
      type="radio"
      name="navbar-type"
      value="sticky"
    >
    <label for="layout-navbar-sticky">sticky</label>
  </div>
  <div>
    <input
      id="layout-navbar-static"
      v-model="navbarType"
      type="radio"
      name="navbar-type"
      value="static"
    >
    <label for="layout-navbar-static">static</label>
  </div>
  <div>
    <input
      id="layout-navbar-hidden"
      v-model="navbarType"
      type="radio"
      name="navbar-type"
      value="hidden"
    >
    <label for="layout-navbar-hidden">hidden</label>
  </div>

  <br><br>

  <!-- 👉 Footer -->
  <h2 style=" display: inline-block;border-bottom: 1px solid rgb(204 204 204);">
    Footer
  </h2>
  <div>
    <input
      id="layout-footer-sticky"
      v-model="footerType"
      type="radio"
      name="footer-type"
      value="sticky"
    >
    <label for="layout-footer-sticky">sticky</label>
  </div>
  <div>
    <input
      id="footer-static"
      v-model="footerType"
      type="radio"
      name="footer-type"
      value="static"
    >
    <label for="footer-static">static</label>
  </div>
  <div>
    <input
      id="layout-footer-hidden"
      v-model="footerType"
      type="radio"
      name="footer-type"
      value="hidden"
    >
    <label for="layout-footer-hidden">hidden</label>
  </div>

  <br><br>

  <!-- 👉 Vertical nav collapsed -->
  <div v-show="appContentLayoutNav === 'vertical'">
    <h2 style=" display: inline-block;border-bottom: 1px solid rgb(204 204 204);">
      Vertical Nav Collapsed
    </h2>
    <label style="display: block;">
      <span>Is Vertical Nav collapsed</span>
      <input
        v-model="isVerticalNavCollapsed"
        type="checkbox"
      >
    </label>
    <br><br>
  </div>

  <!-- 👉 App content width -->
  <h2 style=" display: inline-block;border-bottom: 1px solid rgb(204 204 204);">
    App content Width
  </h2>
  <div>
    <input
      id="cw-boxed"
      v-model="appContentWidth"
      type="radio"
      name="cw"
      value="boxed"
    >
    <label for="cw-boxed">boxed</label>
  </div>
  <div>
    <input
      id="cw-fluid"
      v-model="appContentWidth"
      type="radio"
      name="cw"
      value="fluid"
    >
    <label for="cw-fluid">fluid</label>
  </div>

  <br><br>

  <!-- 👉 Default layout Nav -->
  <h2 style=" display: inline-block;border-bottom: 1px solid rgb(204 204 204);">
    Default layout nav
  </h2>
  <div>
    <input
      id="default-vertical"
      v-model="appContentLayoutNav"
      type="radio"
      name="default-nav"
      value="vertical"
    >
    <label for="default-vertical">vertical</label>
  </div>
  <div>
    <input
      id="default-horizontal"
      v-model="appContentLayoutNav"
      type="radio"
      name="default-nav"
      value="horizontal"
    >
    <label for="default-horizontal">horizontal</label>
  </div>

  <br><br>
</template>
