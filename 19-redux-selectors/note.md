- Wie baut man am besten Selektoren auf? Ein File pro Slice?

Sure, sounds good to me! (it has been a while … I don't need them and I care less about re-renders)

- Wie bindet man Selektoren aus einem Slice in einem Selektor eines anderen ein? (circular dependency)

Recursions just have to be in the same file. No way around it.

If possible just outsource it to a separate file that can be imported by other files.

Duplication is fine
