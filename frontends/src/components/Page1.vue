<template>
  <v-app>
        <v-app-bar color="gray" dark app>
              <v-toolbar-title class="ml-10">カイトリポータル</v-toolbar-title>
              <v-spacer></v-spacer>
               <v-divider class="mx-4" inset vertical></v-divider>
                  <v-toolbar-items>
                  <v-menu offset-y>
                    <template v-slot:activator="{on}">
                    <v-btn v-on="on" text class="mr-10">ログイン名: {{$store.state.userId}}</v-btn>
                    </template>
                    <v-list>
                      <v-list-item>
                        <v-list-item-content>
                          <v-list-item-title><router-link to="/">ログイン画面へ戻る</router-link></v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                  </v-toolbar-items>
    </v-app-bar>
        <v-img
  max-height="450"
  width="100%"
  src="../assets/landscape.jpg"
></v-img>
<v-main class="px-12">
    <v-row>
      <v-col cols="8" class="px-2">
          <v-container>
            <h2><v-icon style="top: -3px; left: -5px;">mdi-file</v-icon>最新のお知らせ</h2>
            <v-tabs
          v-model="tab"
          align-with-title
          show-arrows
        >
          <v-tabs-slider color="yellow"></v-tabs-slider>
              <v-tab
                v-for="item in items"
                :key="item"
              >
                {{ item }}
              </v-tab>
            </v-tabs>
            <v-tabs-items v-model="tab">
              <v-tab-item
                v-for="item in items"
                :key="item"
              >
                <v-card flat>
                  <v-list>
                  <v-list-item v-for="text in texts"
                :key="text" style="padding-left: 0px;">
                  <router-link to="/page3" style="display: inline-block; width: 100%; text-decoration: none;">
                    {{ text }}
                    
                    <v-divider v-if="text" :inset="inset"></v-divider>
                  </router-link>
                  </v-list-item>
                  </v-list>
                </v-card>
              </v-tab-item>
            </v-tabs-items>
          </v-container>
        </v-col>
      <v-col cols="4">
      
      <h2 class="mt-8 pl-1">サイト内検索</h2>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
      <h2 class="mt-8 mb-1 pl-1">社内資料一覧</h2>
    <v-expansion-panels>
    <v-expansion-panel
      v-for="file in files"
      :key="file"
    >
      <v-expansion-panel-header>
        {{file}}
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
      </v-col>
    </v-row>
    <v-row>
      
      <v-col cols="12">
        <p class="text-center"><router-link style="text-decoration: none; color: black;" to="/page2">ページ2へ</router-link></p>
      </v-col>
    </v-row>
  </v-main>
      <v-footer class="justify-center" color="gray" dark>
        <span>&copy;2021 FunGuys</span>
      </v-footer>
  </v-app>
  </template>

  <script>  
  export default {
    data () {
      return {
        tab: null,
        items: [
          '高槻店', '池田店', '鈴蘭台店', '枚方店',
        ],
        texts: [
          '7月最新のお知らせ','8月最新のお知らせ','9月最新のお知らせ','10月最新のお知らせ','11月最新のお知らせ',
        ],
        files: [
          '査定方法に関して', '取り扱いジャンル', '電話対応マニュアル', '各種ログイン情報', '社内連絡帳',
        ],
      }
    },
  }
</script>