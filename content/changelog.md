
Version 2.2.0

# Changelog
Changes to Trici from 2.1.0 onwards.

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
