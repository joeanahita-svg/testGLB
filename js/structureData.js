// ============================================
// STRUCTURAL DATA DEFINITION
// structureData.js
// ============================================

// This file contains all structural element definitions
// Modify this data to change the building without touching the main code

// Global coordinate system origin at (0, 0, 0)

// Define element colors
const ELEMENT_COLORS = {
    COLUMN: 0x4CAF50,      // Green
    BEAM: 0x2196F3,        // Blue
    BRACE: 0xFF9800,       // Orange
    WALL: 0xBDBDBD,        // Gray (transparent)
    SLAB: 0x9E9E9E,        // Dark Gray (transparent)
    SUPPORT: 0xFF0000      // Red
};

// Cross-section definitions
const CROSS_SECTIONS = {
    RECTANGULAR_300x400: { type: 'rectangular', width: 0.3, height: 0.4 },
    RECTANGULAR_400x500: { type: 'rectangular', width: 0.4, height: 0.5 },
    RECTANGULAR_250x300: { type: 'rectangular', width: 0.25, height: 0.3 },
    CIRCULAR_400: { type: 'circular', diameter: 0.4 },
    CIRCULAR_500: { type: 'circular', diameter: 0.5 },
    CIRCULAR_300: { type: 'circular', diameter: 0.3 },
    I_SECTION_200: { type: 'i-beam', height: 0.2, width: 0.1, webThickness: 0.01, flangeThickness: 0.015 },
    I_SECTION_300: { type: 'i-beam', height: 0.3, width: 0.15, webThickness: 0.012, flangeThickness: 0.018 }
};

// Structural elements data
const structuralData = {
    // Columns (start point, end point, cross-section, local rotation angle in degrees)
    columns: [
        { id: 'C1', start: [0, 0, 0], end: [0, 4, 0], section: 'CIRCULAR_400', rotation: 0 },
        { id: 'C2', start: [6, 0, 0], end: [6, 4, 0], section: 'CIRCULAR_500', rotation: 0 },
        { id: 'C3', start: [12, 0, 0], end: [12, 4, 0], section: 'CIRCULAR_400', rotation: 0 },
        { id: 'C4', start: [0, 0, 6], end: [0, 4, 6], section: 'RECTANGULAR_300x400', rotation: 0 },
        { id: 'C5', start: [6, 0, 6], end: [6, 4, 6], section: 'RECTANGULAR_400x500', rotation: 0 },
        { id: 'C6', start: [12, 0, 6], end: [12, 4, 6], section: 'RECTANGULAR_300x400', rotation: 0 },
        { id: 'C7', start: [0, 0, 12], end: [0, 4, 12], section: 'CIRCULAR_300', rotation: 0 },
        { id: 'C8', start: [6, 0, 12], end: [6, 4, 12], section: 'CIRCULAR_400', rotation: 0 },
        { id: 'C9', start: [12, 0, 12], end: [12, 4, 12], section: 'CIRCULAR_300', rotation: 0 },
        // Second floor columns
        { id: 'C10', start: [0, 4, 0], end: [0, 8, 0], section: 'CIRCULAR_300', rotation: 0 },
        { id: 'C11', start: [6, 4, 0], end: [6, 8, 0], section: 'CIRCULAR_400', rotation: 0 },
        { id: 'C12', start: [12, 4, 0], end: [12, 8, 0], section: 'CIRCULAR_300', rotation: 0 },
        { id: 'C13', start: [0, 4, 6], end: [0, 8, 6], section: 'RECTANGULAR_250x300', rotation: 0 },
        { id: 'C14', start: [6, 4, 6], end: [6, 8, 6], section: 'RECTANGULAR_300x400', rotation: 0 },
        { id: 'C15', start: [12, 4, 6], end: [12, 8, 6], section: 'RECTANGULAR_250x300', rotation: 0 },
        { id: 'C16', start: [0, 4, 12], end: [0, 8, 12], section: 'CIRCULAR_300', rotation: 0 },
        { id: 'C17', start: [6, 4, 12], end: [6, 8, 12], section: 'CIRCULAR_300', rotation: 0 },
        { id: 'C18', start: [12, 4, 12], end: [12, 8, 12], section: 'CIRCULAR_300', rotation: 0 }
    ],

    // Beams (start point, end point, cross-section, local rotation angle in degrees)
    beams: [
        // Ground floor beams
        { id: 'B1', start: [0, 4, 0], end: [6, 4, 0], section: 'RECTANGULAR_250x300', rotation: 0 },
        { id: 'B2', start: [6, 4, 0], end: [12, 4, 0], section: 'RECTANGULAR_250x300', rotation: 0 },
        { id: 'B3', start: [0, 4, 6], end: [6, 4, 6], section: 'RECTANGULAR_300x400', rotation: 0 },
        { id: 'B4', start: [6, 4, 6], end: [12, 4, 6], section: 'RECTANGULAR_300x400', rotation: 0 },
        { id: 'B5', start: [0, 4, 12], end: [6, 4, 12], section: 'RECTANGULAR_250x300', rotation: 0 },
        { id: 'B6', start: [6, 4, 12], end: [12, 4, 12], section: 'RECTANGULAR_250x300', rotation: 0 },
        { id: 'B7', start: [0, 4, 0], end: [0, 4, 6], section: 'RECTANGULAR_250x300', rotation: 0 },
        { id: 'B8', start: [0, 4, 6], end: [0, 4, 12], section: 'RECTANGULAR_250x300', rotation: 0 },
        { id: 'B9', start: [6, 4, 0], end: [6, 4, 6], section: 'I_SECTION_300', rotation: 0 },
        { id: 'B10', start: [6, 4, 6], end: [6, 4, 12], section: 'I_SECTION_300', rotation: 0 },
        { id: 'B11', start: [12, 4, 0], end: [12, 4, 6], section: 'RECTANGULAR_250x300', rotation: 0 },
        { id: 'B12', start: [12, 4, 6], end: [12, 4, 12], section: 'RECTANGULAR_250x300', rotation: 0 },
        // Second floor beams
        { id: 'B13', start: [0, 8, 0], end: [6, 8, 0], section: 'RECTANGULAR_250x300', rotation: 0 },
        { id: 'B14', start: [6, 8, 0], end: [12, 8, 0], section: 'RECTANGULAR_250x300', rotation: 0 },
        { id: 'B15', start: [0, 8, 6], end: [6, 8, 6], section: 'I_SECTION_200', rotation: 0 },
        { id: 'B16', start: [6, 8, 6], end: [12, 8, 6], section: 'I_SECTION_200', rotation: 0 },
        { id: 'B17', start: [0, 8, 12], end: [6, 8, 12], section: 'RECTANGULAR_250x300', rotation: 0 },
        { id: 'B18', start: [6, 8, 12], end: [12, 8, 12], section: 'RECTANGULAR_250x300', rotation: 0 },
        { id: 'B19', start: [0, 8, 0], end: [0, 8, 6], section: 'RECTANGULAR_250x300', rotation: 0 },
        { id: 'B20', start: [0, 8, 6], end: [0, 8, 12], section: 'RECTANGULAR_250x300', rotation: 0 },
        { id: 'B21', start: [6, 8, 0], end: [6, 8, 6], section: 'I_SECTION_200', rotation: 0 },
        { id: 'B22', start: [6, 8, 6], end: [6, 8, 12], section: 'I_SECTION_200', rotation: 0 },
        { id: 'B23', start: [12, 8, 0], end: [12, 8, 6], section: 'RECTANGULAR_250x300', rotation: 0 },
        { id: 'B24', start: [12, 8, 6], end: [12, 8, 12], section: 'RECTANGULAR_250x300', rotation: 0 }
    ],

    // Braces (start point, end point, cross-section, local rotation angle in degrees)
    braces: [
        { id: 'BR1', start: [0, 0, 0], end: [6, 4, 6], section: 'CIRCULAR_300', rotation: 0 },
        { id: 'BR2', start: [6, 0, 0], end: [12, 4, 6], section: 'CIRCULAR_300', rotation: 0 },
        { id: 'BR3', start: [0, 4, 0], end: [6, 8, 6], section: 'CIRCULAR_300', rotation: 0 },
        { id: 'BR4', start: [6, 4, 0], end: [12, 8, 6], section: 'CIRCULAR_300', rotation: 0 }
    ],

    // Slabs (defined by corner points)
    slabs: [
        { id: 'S1', points: [[0, 0, 0], [12, 0, 0], [12, 0, 12], [0, 0, 12]], thickness: 0.2 },
        { id: 'S2', points: [[0, 4, 0], [12, 4, 0], [12, 4, 12], [0, 4, 12]], thickness: 0.2 },
        { id: 'S3', points: [[0, 8, 0], [12, 8, 0], [12, 8, 12], [0, 8, 12]], thickness: 0.2 }
    ],

    // Walls (defined by corner points, with thickness)
    walls: [
        { id: 'W1', points: [[0, 0, 0], [12, 0, 0], [12, 8, 0], [0, 8, 0]], thickness: 0.2 },
        { id: 'W2', points: [[0, 0, 12], [12, 0, 12], [12, 8, 12], [0, 8, 12]], thickness: 0.2 },
        { id: 'W3', points: [[0, 0, 0], [0, 0, 12], [0, 8, 12], [0, 8, 0]], thickness: 0.2 },
        { id: 'W4', points: [[12, 0, 0], [12, 0, 12], [12, 8, 12], [12, 8, 0]], thickness: 0.2 }
    ],

    // Supports (point location, type: 'fixed', 'pinned', 'roller')
    supports: [
        { id: 'SUP1', location: [0, 0, 0], type: 'fixed' },
        { id: 'SUP2', location: [6, 0, 0], type: 'pinned' },
        { id: 'SUP3', location: [12, 0, 0], type: 'fixed' },
        { id: 'SUP4', location: [0, 0, 6], type: 'pinned' },
        { id: 'SUP5', location: [6, 0, 6], type: 'pinned' },
        { id: 'SUP6', location: [12, 0, 6], type: 'pinned' },
        { id: 'SUP7', location: [0, 0, 12], type: 'fixed' },
        { id: 'SUP8', location: [6, 0, 12], type: 'pinned' },
        { id: 'SUP9', location: [12, 0, 12], type: 'fixed' }
    ]
};