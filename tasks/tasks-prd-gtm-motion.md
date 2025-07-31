# Task List: Go-to-Market Motion Feature

Based on PRD analysis and current codebase assessment:
- Current app uses React + TypeScript + Ant Design + React Router
- Existing structure has Products page with table layout
- Clean layout with sidebar navigation and header
- Following established PCC design patterns with white cards on light gray background

## Relevant Files

- `src/pages/Motions.tsx` - Main GTM Motions list page component
- `src/pages/MotionDetail.tsx` - Individual motion detail/edit page component  
- `src/components/MotionStatusBadge.tsx` - Reusable status indicator component
- `src/components/ProductSelector.tsx` - Product selection interface for motions
- `src/components/MotionForm.tsx` - Form component for creating/editing motion details
- `src/components/ProductChangesList.tsx` - Component to display product changes in a motion
- `src/data/mockMotions.ts` - Mock data for GTM motions
- `src/data/mockProducts.ts` - Enhanced mock product data with descriptions
- `src/types/motion.ts` - TypeScript interfaces for motion-related data
- `src/types/product.ts` - Enhanced product interface with description field
- `src/utils/motionHelpers.ts` - Utility functions for motion operations

### Notes

- All components follow Ant Design patterns established in existing Products.tsx
- Mock data provides realistic LinkedIn product catalog examples
- Status workflow progresses through: Draft → Submitted → Pushing to EI → Approvals → Pushing to Production → In Production

## Tasks

- [x] 1.0 Set up Motion Data Models and Mock Data
  - [x] 1.1 Create TypeScript interfaces for Motion, ProductChange, and enhanced Product types in `src/types/`
  - [x] 1.2 Build comprehensive mock motion data with realistic LinkedIn product examples and all workflow states
  - [x] 1.3 Enhance existing product mock data to include descriptions and additional fields needed for editing
  - [x] 1.4 Create utility functions for motion operations (status transitions, validation, etc.)

- [ ] 2.0 Create GTM Motions List Page  
  - [ ] 2.1 Build Motions page component with Ant Design Table displaying motions with status badges
  - [ ] 2.2 Implement MotionStatusBadge component with color-coded workflow states
  - [ ] 2.3 Add "Create Motion" button in header that navigates to new motion detail page
  - [ ] 2.4 Style page following PCC design patterns (white table on light gray background with shadows)
  - [ ] 2.5 Make motion rows clickable to navigate to motion detail page

- [ ] 3.0 Build Motion Detail Page with Form Functionality
  - [ ] 3.1 Create MotionDetail page component with form for motion name and activation date
  - [ ] 3.2 Build MotionForm component using Ant Design Form with validation
  - [ ] 3.3 Implement ProductChangesList component to display current product changes in motion
  - [ ] 3.4 Add motion status tracking and workflow progression indicators
  - [ ] 3.5 Include Submit Motion button that progresses status from Draft to Submitted
  - [ ] 3.6 Handle both new motion creation and existing motion editing in same component

- [ ] 4.0 Integrate Product Selection and Change Assignment
  - [ ] 4.1 Enhance Products page to include edit functionality for product name and description
  - [ ] 4.2 Build ProductSelector component (modal or inline) for selecting products within motion detail
  - [ ] 4.3 Implement motion assignment workflow when saving product changes
  - [ ] 4.4 Add "Add to Motion" functionality with dropdown to select existing motion or create new one
  - [ ] 4.5 Implement toast notifications for successful motion creation/assignment from product pages
  - [ ] 4.6 Create product change tracking that shows before/after values in motion detail

- [ ] 5.0 Add Navigation and Routing Integration
  - [ ] 5.1 Add GTM Motions menu item to sidebar navigation with appropriate icon
  - [ ] 5.2 Set up React Router routes for `/motions` and `/motions/:id` pages
  - [ ] 5.3 Update App.tsx routing configuration to include new motion routes
  - [ ] 5.4 Implement breadcrumb navigation between motions and products where appropriate
  - [ ] 5.5 Ensure proper navigation flow from motion creation button vs product page creation