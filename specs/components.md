# Button Component

- [x] Finished

## Inputs

- label: string (optional)
- size: xs | sm | md | lg | xl | xxl
- disabled: boolean (default false)
- theme: primary | secondary (default primary)
- variant: basic | text | outlined (default basic) | fab (a round button) | fab-outlined
- useIcon: boolean (actual icon is passed as ng-content via pre-icon or post-icon for positioning)
- id: string (optional for aria)

## Outputs

- click: output<void>

# Input Component

- [ ] Finished

- Will implement https://angular.dev/api/forms/signals/FormUiControl#errors (will value=model, disabled, valid, errors)


## Inputs
- label: string (optional)
- size: xs | sm | md | lg | xl (default: md)
- theme: primary | secondary (default primary)
- variant: basic | outlined (default basic)
- inputType: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input (the values from here)
- required: boolean (to display an "*") (default false)
- id: string (optional for aria)

## Outputs

- none


# Chip Component

- [ ] Finished

## Inputs

- content: will be passed as ng-content
- size: xs | sm | md | lg | xl | xxl (default: md)
- theme: primary | secondary (default primary)
- removable: boolean (will display an "x" to be removed if present)  (default false)
- highlighted: boolean (forces the hover highlight) (default false)
- disabled: boolean (default false)
- id: string (optional for aria)

## Outputs

- clicked
- removed

# Button Toggle Group alongside with mat-button-toggle

- [ ] Finished

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

- [ ] Finished

## Inputs

- size: xs | sm | md | lg | xl | xxl (default: md)
- theme: primary | secondary (default primary)
- id: string (optional for aria)
- name: string (HTML's 'name' attribute used to group radios for unique selection.)
- disabled: boolean (default false)
- vertical: boolean (Whether the toggle group is vertical.)
- multiple: boolean (Whether multiple button toggles can be selected)
- value: string (the identifier of the toggle group button, so that value is the one currently selected)

## Outputs

- change: Event emitted when the group value changes.

# Divider Component

- [ ] Finished

## Inputs

- vertical: boolean
- inset: boolean
- width: number (default 1px)

### Style info
- color should be customizable via the theme

## Outputs 

- none

# Panel Component 

- [ ] Finished

- Similar to an expansion panel, using ng-content

# Progress Spinner Component

- [ ] Finished

## Inputs

- mode: determinate | indeterminate (defaults to indeterminate)
- theme: primary | secondary (default primary)
- value: number (optional, only used if determinate)
- diameter: number (The diameter of the progress spinner (will set width and height of svg)
- strokeWidth (Stroke width of the progress spinner.)


# Toast Component

- [ ] Finished

## Inputs

- content: passed via ng-content
- theme: primary | secondary (default primary)
- variant: basic | outlined (default basic)
- removable: boolean (will display an "x" to be removed if present)  (default false)
- disabled: boolean (default false)
- id: string (optional for aria)

