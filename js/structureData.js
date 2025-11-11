// ============================================
// STRUCTURAL DATA DEFINITION
// structureData.js
// ============================================

// This file contains all structural element definitions
// Modify this data to change the building without touching the main code

// Global coordinate system origin at (0, 0, 0)

const ELEMENT_COLORS = {
    COLUMN: 0x4CAF50,      // Green
    BEAM: 0x2196F3,        // Blue
    BRACE: 0xFF9800,       // Orange
    WALL: 0xBDBDBD,        // Gray (transparent)
    SLAB: 0x9E9E9E,        // Dark Gray (transparent)
    SUPPORT: 0xFF0000      // Red
};

const CROSS_SECTIONS = {
    RECTANGULAR_C40x40-12T14: { type: 'rectangular', width: 0.400, height: 0.400 },
    RECTANGULAR_B40x40: { type: 'rectangular', width: 0.400, height: 0.400 },
    RECTANGULAR_B30x40: { type: 'rectangular', width: 0.300, height: 0.400 },
};

const structuralData = {
    // Columns (start point, end point, cross-section, local rotation angle in degrees)
    columns: [
        { id: '1', start: [0.000, -0.000, -1.500], end: [0.000, -0.000, 3.900], section: 'RECTANGULAR_C40x40-12T14', rotation: 90 },
        { id: '2', start: [3.100, 0.000, -1.500], end: [3.100, 0.000, 3.900], section: 'RECTANGULAR_C40x40-12T14', rotation: 90 },
        { id: '3', start: [5.900, 0.000, -1.500], end: [5.900, 0.000, 3.900], section: 'RECTANGULAR_C40x40-12T14', rotation: 90 },
        { id: '4', start: [9.000, 0.000, -1.500], end: [9.000, 0.000, 3.900], section: 'RECTANGULAR_C40x40-12T14', rotation: 90 },
        { id: '5', start: [0.000, 8.600, -1.500], end: [0.000, 8.600, 3.900], section: 'RECTANGULAR_C40x40-12T14', rotation: 90 },
        { id: '6', start: [3.100, 8.600, -1.500], end: [3.100, 8.600, 3.900], section: 'RECTANGULAR_C40x40-12T14', rotation: 90 },
        { id: '7', start: [5.900, 8.600, -1.500], end: [5.900, 8.600, 3.900], section: 'RECTANGULAR_C40x40-12T14', rotation: 90 },
        { id: '8', start: [9.000, 8.600, -1.500], end: [9.000, 8.600, 3.900], section: 'RECTANGULAR_C40x40-12T14', rotation: 90 },
    ],

    // Beams (start point, end point, cross-section, local rotation angle in degrees)
    beams: [
        { id: '9', start: [0.000, 0.200, 4.300], end: [0.000, 8.400, 4.300], section: 'RECTANGULAR_B40x40', rotation: -180 },
        { id: '10', start: [3.100, 0.200, 4.300], end: [3.100, 8.400, 4.300], section: 'RECTANGULAR_B40x40', rotation: -180 },
        { id: '11', start: [5.900, 0.200, 4.300], end: [5.900, 8.400, 4.300], section: 'RECTANGULAR_B40x40', rotation: -180 },
        { id: '12', start: [9.000, 0.200, 4.300], end: [9.000, 8.400, 4.300], section: 'RECTANGULAR_B40x40', rotation: -180 },
        { id: '13', start: [0.200, 8.600, 4.300], end: [2.900, 8.600, 4.300], section: 'RECTANGULAR_B30x40', rotation: -90 },
        { id: '14', start: [3.300, 8.600, 4.300], end: [5.700, 8.600, 4.300], section: 'RECTANGULAR_B30x40', rotation: -90 },
        { id: '15', start: [6.100, 8.600, 4.300], end: [8.800, 8.600, 4.300], section: 'RECTANGULAR_B30x40', rotation: -90 },
        { id: '16', start: [0.200, -0.000, 4.300], end: [2.900, -0.000, 4.300], section: 'RECTANGULAR_B30x40', rotation: -90 },
        { id: '17', start: [3.300, 0.000, 4.300], end: [5.700, 0.000, 4.300], section: 'RECTANGULAR_B30x40', rotation: -90 },
        { id: '18', start: [6.100, 0.000, 4.300], end: [8.800, 0.000, 4.300], section: 'RECTANGULAR_B30x40', rotation: -90 },
        { id: '19', start: [5.900, 6.050, 4.300], end: [9.000, 6.050, 4.300], section: 'RECTANGULAR_B40x40', rotation: -90 },
        { id: '20', start: [3.100, 6.050, 4.300], end: [5.900, 6.050, 4.300], section: 'RECTANGULAR_B40x40', rotation: -90 },
        { id: '21', start: [0.000, 6.050, 4.300], end: [3.100, 6.050, 4.300], section: 'RECTANGULAR_B40x40', rotation: -90 },
    ],

    braces: [],

    slabs: [],

    walls: [],

    // Supports (point location, type: 'fixed', 'pinned', 'roller')
    supports: [
        { id: 'SUP1', location: [0.000, -0.000, -1.500], type: 'pinned' },
        { id: 'SUP2', location: [3.100, 0.000, -1.500], type: 'pinned' },
        { id: 'SUP3', location: [5.900, 0.000, -1.500], type: 'pinned' },
        { id: 'SUP4', location: [9.000, 0.000, -1.500], type: 'pinned' },
        { id: 'SUP5', location: [0.000, 8.600, -1.500], type: 'pinned' },
        { id: 'SUP6', location: [3.100, 8.600, -1.500], type: 'pinned' },
        { id: 'SUP7', location: [5.900, 8.600, -1.500], type: 'pinned' },
        { id: 'SUP8', location: [9.000, 8.600, -1.500], type: 'pinned' },
    ]
};
