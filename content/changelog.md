
Version 2.1.1

# Changelog
Changes to Trici from 2.1.0 onwards.


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
