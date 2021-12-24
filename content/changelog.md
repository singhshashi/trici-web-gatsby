---
title: 'Changelog'
description: 'Here you will find the detailed release notes including improvements, bug fixes, new features and more about the Trici desktop app.'
keywords: 'Changelog, release notes, bug fixes'
lastUpdatedDate: '21 Dec 2021'
---
Version 2.7.0

# Changelog
Changes to Trici from 2.1.0 onwards.

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

## [2.5.0] - 2021-11-05

### Added 
- Trici now has native builds for Apple Silicon. 
- Have a separate release and update channel for Arm builds. 

### Fixed 
- UX where window is on top of Fullscreen apps on Mac. 
- Timer time in UI was out of sync with actual session time. 
- Multiple entries were created for the same Focus Session. 

### Changed
- Updated to latest release of Electron, changing how renderer process accesses the main process modules for greater security.

## [2.4.0] - 2021-10-04

### Added 
- Allow recording of only the selected screen on Linux. 
- Allow user to send feeback from within the app. 

### Fixed 
- When navigating between dates Focus Session does not change. 

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

### Changed
- Reduce the amount of logs generated.
- Optmized recording script performance.
- App does not show in the dock at all. Its completely a menubar app now.
- Default theme used in the app for better contrast.

## [2.2.0] -2021-03-02
### Added
- Command Buttons for Session In Progress Actions.
- Setting to enable/disable Session In Progress Command Line.
- Duration of Last Focus Session is now shown separately.
- Using Native System Notification on Mac to show options to start a Focus Session instead of our own hacky implementation.

### Fixed
- Delete Session now works from both Home and MySessions screen.
- Help menu click now opens website docs home page.
- New days day plan shows in Trici Tasks when the day changes

### Changed

- Session In Progress Screen UI changed to make it simpler.
- Showing In App messages instead of flooding the system notifications.
- Improved how often System Notification shown when user becomes active on Mac.
- Next and previous day button now works.


## [2.1.1] -2021-01-02
### Added
- Show added notes on the Trici Player.
- Show time since last focus session in the home screen.


### Fixed
- Daily Focus Time Achieved graph now shows correct value
- Add Note to  a Focus Session retrospectively
- Trici Player now handles resizing of window better. Does not overflow.
- Update Today State when the day changes.

## [2.1.0] - 2020-12-16
### Added
- Shortcut to drop a marker during a Focus Session
- Display markers on the Trici video player


### Changed
- Improved the Command Help documentation

### Fixed
- Command to add a note during the Focus Session
- Cleanly exit child processes if user quits without ending session.
- Show tasks worked on during a Focus Session in MySessions and allow filtering based on that.
- Daily Focus Time Target achieved graph was showing incorrect value.

### Removed
- Old packaging scripts. Now using a library to create debian package.
