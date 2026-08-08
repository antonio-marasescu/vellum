# Button Component

- [x] Finished

## Inputs

- label: string (optional)
- size: xs | sm | md | lg | xl | xxl
- disabled: boolean (default false)
- theme: primary | secondary | info | success | warning (default primary)
- variant: basic | text | outlined (default basic) | fab (a round button) | fab-outlined
- useIcon: boolean (actual icon is passed as ng-content via pre-icon or post-icon for positioning)
- id: string (optional for aria)

## Outputs

- click: output<void>

# Input Component

- [x] Finished

- Will implement https://angular.dev/api/forms/signals/FormUiControl#errors (will value=model, disabled, valid, errors)


## Inputs
- label: string (optional)
- size: xs | sm | md | lg | xl (default: md)
- theme: primary | secondary (default primary)
- variant: basic | outlined (default basic)
- inputType: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input (the values from here)
- required: boolean (to display an "*") (default false)
- id: string (required, for aria/label association)

## Outputs

- none


# Chip Component

- [x] Finished

## Inputs

- content: will be passed as ng-content
- size: xs | sm | md | lg | xl | xxl (default: md)
- theme: primary | secondary | info | success | warning (default primary)
- clickable: boolean (whether the chip itself emits `clicked` and looks interactive; the remove
  button still works when `removable` is true regardless of this) (default true)
- removable: boolean (will display an "x" to be removed if present)  (default false)
- highlighted: boolean (forces the hover highlight) (default false)
- disabled: boolean (default false)
- id: string (optional for aria)

## Outputs

- clicked
- removed

# Button Toggle Group alongside with mat-button-toggle

- [x] Finished

- Simlar to this, but we want a simplified version without aria for now, and of course ids
```html
<p>
  Default appearance:
  <mat-button-toggle-group name="fontStyle" aria-label="Font Style">
    <mat-button-toggle value="bold">Bold</mat-button-toggle>
    <mat-button-toggle value="italic">Italic</mat-button-toggle>
    <mat-button-toggle value="underline">Underline</mat-button-toggle>
  </mat-button-toggle-group>
</p>
```
### Button Toggle Group

- [x] Finished

## Inputs

- size: xs | sm | md | lg | xl | xxl (default: md)
- theme: primary | secondary | info | success | warning (default primary)
- id: string (optional for aria)
- name: string (HTML's 'name' attribute used to group radios for unique selection.)
- disabled: boolean (default false)
- vertical: boolean (Whether the toggle group is vertical.)
- multiple: boolean (Whether multiple button toggles can be selected)
- value: string[] (the identifiers of the currently selected toggle(s); always an array,
  even in single-select mode, so it holds 0 or 1 entries there)

## Outputs

- selectionChange: Event emitted when the group value changes. Named `selectionChange`
  rather than `change` — Angular ESLint's `no-output-native` rule forbids reusing native
  DOM event names for custom outputs.

# Divider Component

- [x] Finished

## Inputs

- vertical: boolean
- inset: boolean
- width: number (default 1px)
- theme: primary | secondary | neutral (default neutral)

### Style info
- color should be customizable via the theme

## Outputs 

- none

# Panel Component 

- [x] Finished

- Similar to an expansion panel, using ng-content

# Progress Spinner Component

- [x] Finished

## Inputs

- mode: determinate | indeterminate (defaults to indeterminate)
- theme: primary | secondary | info | success | warning (default primary)
- value: number (optional, only used if determinate)
- diameter: number (The diameter of the progress spinner (will set width and height of svg)
- strokeWidth (Stroke width of the progress spinner.)


# Toast Component

- [x] Finished

## Inputs

- content: passed via ng-content
- theme: primary | secondary | info | success | warning (default primary)
- variant: basic | outlined (default basic)
- removable: boolean (will display an "x" to be removed if present)  (default false)
- disabled: boolean (default false)
- id: string (optional for aria)

# Avatar Component

- [x] Finished

## Inputs

- url: string
- useUrl: boolean (default true)
- placeholder: string (shows the placeholder when useUrl is false)
- size: xs | sm | md | lg | xl | xxl (default: md)
- variant: round | square | rounded
- clickable: boolean (defaults false)

## Outputs

- clicked

# Checkbox Component

- [x] Finished

- Implements https://angular.dev/api/forms/signals/FormCheckboxControl (checked=model,
  disabled, valid, errors), same as Input implements FormValueControl.

## Inputs

- checked: boolean (model, two-way bindable via `[(checked)]`) (default false)
- label: string (optional)
- size: xs | sm | md | lg | xl (default: md)
- theme: primary | secondary (default primary)
- required: boolean (to display an "*") (default false)
- id: string (required, for aria/label association)

## Outputs

- none (the `checked` model's implicit `checkedChange` is the only change signal)


# Radio Component + Radio Group

- [x] Finished

- A radio only makes sense as part of a group (like Button Toggle Group), so there is a
  `vlm-radio-group` wrapper implementing
  https://angular.dev/api/forms/signals/FormValueControl (value=model, disabled, valid,
  errors) and a dumb `vlm-radio` child that injects the group for its
  theme/size/disabled/selected state, similar to how `vlm-button-toggle` injects
  `vlm-button-toggle-group`.

### Radio Group

## Inputs

- value: string (model, two-way bindable via `[(value)]`) (default '')
- size: xs | sm | md | lg | xl (default: md)
- theme: primary | secondary (default primary)
- name: string (optional, HTML's 'name' attribute for the underlying radio inputs)
- required: boolean (default false)
- id: string (optional for aria)
- vertical: boolean (default true)
- disabled: boolean (default false)

## Outputs

- none (the `value` model's implicit `valueChange` is the only change signal)

### Radio

## Inputs

- value: string (required, the identifier this radio represents within the group)
- label: string (optional)
- disabled: boolean (default false)
- id: string (optional for aria)

## Outputs

- none

# Select Component

- [ ] Finished


## Inputs

- label: string (optional)
- size: xs | sm | md | lg | xl (default: md)
- theme: primary | secondary (default primary)
- variant: basic | outlined (default basic)
- inputType: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input (the values from here)
- required: boolean (to display an "*") (default false)
- id: string (required, for aria/label association)


## Outputs

- change: Event emitted when the group value changes.

# Toggle Component

- [x] Finished

- A switch-style boolean control (track + sliding thumb), distinct from Checkbox's
  box-and-checkmark appearance. Implements
  https://angular.dev/api/forms/signals/FormCheckboxControl (checked=model, disabled,
  valid, errors), same contract as Checkbox.
- The thumb transitions with a short delay after the track color starts changing, so the
  flip doesn't feel instantaneous/jarring.

## Inputs

- checked: boolean (model, two-way bindable via `[(checked)]`) (default false)
- label: string (optional)
- size: xs | sm | md | lg | xl (default: md)
- theme: primary | secondary (default primary)
- required: boolean (to display an "*") (default false)
- id: string (required, for aria/label association)

## Outputs

- none (the `checked` model's implicit `checkedChange` is the only change signal)

# Swap Button Component

- [ ] Finished

- A button that swaps between two icons both provided via ng-content. Intended for theme control
- Question how do we control the size?
- It should have a flip animation

## Inputs

- size: xs | sm | md | lg | xl | xxl
- disabled: boolean (default false)
- id: string (optional for aria)

## Outputs

- click: output<void>

# Dropdown Component

- [ ] Finished

- Dropdown can open a menu or any other element when the button is clicked.

## Inputs

- label: string (optional)
- size: xs | sm | md | lg | xl | xxl
- disabled: boolean (default false)
- theme: primary | secondary | info | success | warning (default primary)
- variant: basic | text | outlined (default basic) | fab (a round button) | fab-outlined
- useIcon: boolean (actual icon is passed as ng-content via pre-icon or post-icon for positioning)
- id: string (optional for aria)
- items: a list of key-value pairs (the value is the label)

## Outputs

- click: output<void> (when the main button was clicked)
- selected: output<string>
