
# Form Component Update

The form has been updated to exhibit a modern look that closely resembles the image provided below.

## Form Element

The form has been created as a single component for prototyping to facilitate comprehension. It is structured as a monolithic block for simplicity, particularly for code review purposes in the initial interview phase. While it could be broken down into smaller components, such as separate inputs and the table, this unified approach was chosen to minimize complexity for reviewers.

The table has been made wider to occupy the full page width, which deviates from the image that suggests a narrower layout, likely not intended for a full desktop view.

### CSS

All sizing is defined using `vh` (viewport height) and `vw` (viewport width) units to enhance responsiveness without relying on media queries. This approach also accounts for varying pixel densities across devices, ensuring a more consistent appearance in terms of responsiveness.

### JavaScript

The API used for location data and name validation is sourced from `api.js`. Notably, this is not an actual RESTful API request; thus, it is imported as a function.

- `useEffect` #1: Retrieves all locations from `api.js`.
- `useEffect` #2: Validates the name input using `api.js`. The validation is triggered upon form submission rather than on each keystroke to prevent premature error messages during typing.

The `isNameValid` function simulates an API request, returning a specific string ('invalid name') to indicate an invalid input. This approach is unconventional, as it's unlikely for someone to literally type "invalid name" as a name, but it serves its purpose for the prototype.

Additional error handling for the name field is in place and can be expanded in the future. Current implementation ensures basic validation is present from the outset.

### Buttons

- **Clear Button**: Intended to reset the table. Its functionality might be perceived as ambiguous, as it could be misconstrued to clear the name input instead. A design iteration could position the clear button closer to the table to clarify its intended function.
  
- **Add Button**: Facilitates the submission of inputs. The associated `submitNameAndCountry` function includes error checking for both the name and country fields, and validates the presence of any existing errors before proceeding.

### Table

The table styling is reflective of the provided image. A table element was chosen over divs to underscore the importance of data presentation over mere informational layout.
