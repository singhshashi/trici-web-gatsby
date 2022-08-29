---
title: 'Changelog'
description: 'Here you will find the detailed release notes including improvements, bug fixes, new features and more about the Trici desktop app.'
keywords: 'Changelog, release notes, bug fixes'
lastUpdatedDate: '26 Aug 2022'
---
Version 2.14.4

# Changelog
Changes to Trici from 2.1.0 onwards.
## [2.14.4] 2022-08-26

### Fixed 
- Icons and recording file were not showing on Windows
- Show current App if user starts second instance of App 
- App Engine Version was not showing on Windows
- Update Now was not working on Mac. 


## [2.14.3] 2022-08-05 

### Added 
- Added clipping functionality. User can now create clips from Focus Session recordings.

### Fixed 
- No sound was playing on Windows.
- Website blocking feature was not working on Windows. 
- Prod bundle compilation was failing due to outdated plugin. 
- Dialog to save clip was hidden behind main window.
- Creating clip was failing on Mac prod builds

### Changed
- Use different Title bar for Windows and Ubuntu. 
- Telemetry to understand how the app is used. 
- Installation Id is set on App Start. 
- Use the new Trici icon. 


## [2.13.1] 2022-07-13

### Fixed
- Change the min size of the window based on whether onboarding or showing main screen.
- When flashing Tray icon, icon should stop at normal state.
- Delete and purge had stopped working due to regression after merging code supporting Windows. 

### Changed
- Changed the Session in Progress screen. 

## [2.13.0] 2022-07-10

### added 
- added a link to a page where the user can subscribe to get updates about trici.
- added a simple onboarding flow introducing user to key features.

### Fixed
- Video did not load when the session ended. 


### Changed
- Changes to get a Windows build running. 
- Changed Feedback button to send and email instead of posting to api.
- First set of UI changes as suggested by the desing intern. Looks much better now. 
- Updated logo with the new color. 

## [2.12.0] 2022-06-25

### Added 
- Shortcuts to Start and Stop a Focus Session.

### Fixed
- Last Focus Session showed as crashed after day changed. 



## [2.11.0] 2022-04-29

### Added 
- Event tracking for video not loading
- Tips to ensure that the user is aware of the shortcuts for show/hide and mark a moment.

### Fixed 
- MySession UI was broken when filter was added.
- Markers and comments in video did not update when Focus Session changed.
- Focus Session was not returning results for searching within notes.
- Unable to delete after deleting a Focus Session in MySessions.
- Tasks should have vertical scroll when tasks exceed the screen space.

### Changed
- UI of Session in Progress screen. Makes action buttons more visible. 
- UI of home screen changed to reduce number of elements attracting user attention. 


## [2.10.1] 2022-02-23

### Added 

### Fixed 

- Recording process was crashing on some systems. 
- App was crashing due to null reference in some cases of showing the Days Focus Sessions. 
- Focus Session did not end when the user became idle. 
- Focus Session did not end when the maximum session duration is reached. 
- Error messages coming in the logs when trying to update the app. 

### Changed


## [2.10.0] 2022-02-21 

### Added 
- Button in CommandBar reminding user they can "Recover Train of Thought"
- Showing Today's Focus Sessions in the Home screen. 

### Fixed
- Icon for Start a Focus Session in Task List


## [2.9.0] 2022-02-16

### Added 
- Allow user to add tasks to Tomorrows day plan from Home screen. 

### Fixed 
- Goto Today did not update the Focus Time achieved today. 
- Changing day to next day was not showing correct data.

### Changed 
- Added paramter to error log in MPIEC to see which parameter is throwing error. 
- Label for Notes text changed in Home screen. 
- Added analytics events for new features and app launched. 

## [2.8.1] 2022-02-10

### Added 

### Fixed 
- Issue where Day plan data was corrupted when day changed. 
- Added missing Goto Today button in Day Switcher 
- Styling so that start a Session button is shown next to planned/worked on Tasks in Day plan. 

### Changed
- Removed grouping from Day Plan detailslist as there was repetition and space wastege. 
- Don't refresh the complete home screen every minute. 


## [2.8.0] 2022-02-09

### Added 
- Allow user to configure global show/hide shortcut
- First iteration of spotlight like control activated by Cmd+k 

### Fixed 
- Recording file was not deleting when Focus Session was deleted
- Scroll bar was not shown in MySessions 
- inApp notifications now shown below the Trici command bar to avoid horizontal scroll from 
  appearing sometimes. 
- fixPath was failing in dev build
- Traffic lights alignment

### Changed 
- Home screen now shows daily work log view instead of LastFocusSession view. 

## [2.7.1] 2021-12-26

### Added 
- Trici watermark in the video.  
- Ask the user which screen to record if multiple displays are connected and user has not saved a preference.

### Fixed 
- Prompt asking whether to record session does not show always anymore. 

### Changed 

## [2.7.0] 2021-12-21

### Added 
- Play sounds on different events such as Start of Session etc. 
- Settings page where user can select which sounds to play. 

### Fixed 
- Auto update was not working on Mac m1.

### Changed 
- Removed native notifications to prompt user to start a Focus Session. Now prompting only with sounds.

## [2.6.2] 2021-12-04

### Added 

### Fixed
- Updated color of splash screen to match color scheme of website.
- Errors thrown during autoUpdate. 

### Changed
- Changed position of Time since last session to be above the video. 

## [2.6.1] 2021-12-02 

### Added 

### Fixed 
- AutoUpdate was not working for Apple Silicon builds. 

### Changed

## [2.6.0] 2021-11-21

### Added
- Added a menu item through which you can ask Trici to sleep and not prompt you to start a Sesion.
 

### Fixed
- Main Window was not getting focused on Command Tab.
- App was crashing if Focus Session was started from the Menu. 
- Main window was not focused when a new session was started.

### Changed



## [2.5.0] 2021-11-04

### Added 
- Support for Apple Silicon. Now we have native builds for Apple Silicon.

### Fixed
- Time displayed was out of sync with the time elapsed. 

### Changed
- Updated electron version. Enabled contextIsolation leading to greater security. 

## [2.4.0] - 2021-10-04 

### Added 
- Allow a user to provide feedback from within the app. 
- Link to join discord to give feedback there.

### Fixed 

### Changed


## [2.3.4] - 2021-09-05

### Added 
- Show appEngine and build versions in the app

### Fixed 
- Timer UI was not updating if navigating to a different screen during a Focus Session 
- Changing log level did not actually change the levels.
- Changing the day in the Daily Log Panel did not work in some cases. 
- Changing the day did not update the total focus time achieved. 

### Changed


## [2.3.3] - 2021-08-30 

### Added 
- Options to control the level of logging 
- Separate file logging for main and renderer processes.

### Fixed 
- remove lodash usage from TriciRepo which threw an error on build.

### Changed
- clean up code of redundant logging statements 

## [2.3.2] - 2021-08-19

### Added 
- Auto updates for Mac

### Fixed 
- Notifications which Prompt to start a Focus Session. 
- Timer UI stops updating if you navigate to a different screen during a Focus Session. 

### Changed
- How notes are shown in the Trici player for better space utilization. 
- Reduce the amount of logs that go to remote

## [2.3.1] - 2021-08-11

### Added
- Ability to start a Focus Session for a task 
- Link Focus Session with Task such that FS started and comments added during FS show up in Task 
  activity. 
- Allow ability to add notes/thoughts about the day.  
- Tooltips for Icon Buttons
### Fixed 
- Activity stream now scrolls properly when content overflows. 

### Changed
- Provided a min size to the main Window. 
- Show Day Plan as a Panel accessible from the Command Bar. 
- Improvements to how In-App messages are shown. 

## [2.3.0] - 2021-07-23

In memory of those who departed from this world during the massive second wave of Covid in India.

### Added 
- A new way to show notifications within the app itself rather than use system notifications.

### Fixed
- Delete Focus Session now works correctly in MySessions screen. 
- Focus Session was ending when any other app was minimized on Mac. 
- Review Session was not changing playback speed based on regions. 
- 

### Changed
- Reduce the amount of logs generated. 
- Optmized recording script performance. 
- App does not show in the dock at all. Its completely a menubar app now. 
- Default theme used in the app for better contrast. 


## [2.2.0] - 2021-03-02

### Added 
- Command Buttons for Session In Progress Actions
- Setting to enable/disable Session In Progress Command Line
- Duration of Last Focus Session is now shown separately
- Using Native System Notification on Mac to show options to start a Focus Session 

### Fixed 
- Delete Session now works from both Home and MySession screens.

### Changed 
- Session In Progress screen UI changed to make it simpler. 
- Showing In App messages instead of flooding system notifications 
- Improved how often System Notification shown when user becomes active on Mac. 

## [2.1.2] - 2021-02-16
### Fixed 
- Day Summary forward and back buttons now work, i.e. can view previous days work summary
- Day Summary is updated when the day changes. 
- Help now opens the website at docs



## [2.1.1] - 2021-01-02
### Added
- Show added notes on the Trici Player.
- Show time since last focus session in the home screen.

### Fixed
- Daily Focus Time Achieved graph now shows correct value
- Add Note to a Focus Session retrospectively
- Trici Player now handles resizing of window better. Does not overflow.
- Update Today State when the day changes.

## [2.1.0] - 2020-12-16
### Added
- Shortcut to drop a marker during a Focus Session
- Display markers on the Trici video player


### Changed
- Improved the Command Help documentation
- Using a new library to create the dmg. Reduced size of dmg from over 300 MB to 98 MB.
- Ask for Screen Recording Permissions on startup

### Fixed
- Command to add a note during the Focus Session
- Cleanly exit child processes if user quits without ending session.
- Show tasks worked on during a Focus Session in MySessions and allow filtering based on that.
- Daily Focus Time Target achieved graph was showing incorrect value.
- New build process fixes builds for MacOS Big Sur

### Removed
- Old packaging scripts.

