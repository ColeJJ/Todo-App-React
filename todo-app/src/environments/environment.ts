// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const SUPABASE_URL = "https://negciqfxvktfbblgfyji.supabase.co"; 
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5lZ2NpcWZ4dmt0ZmJibGdmeWppIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY4MDEwMDMsImV4cCI6MTk5MjM3NzAwM30.fwpSN9u-toI6y7FnWDnlNJLyoCoqvRr9FkjqFOjVSCE";

export const environment = {
  production: false,
  supabaseURL: SUPABASE_URL,
  supabaseKey: SUPABASE_KEY
}  

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
