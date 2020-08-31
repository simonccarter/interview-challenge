import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Item from './Item'

describe('Item tests', () => {
    it('renders', () => {
        const item = {
            name: 'test name',
            dietaries: ['ve', 'xe'],
            isSelected: false,
        }
        render(<Item {...item} />)
        expect(screen.getByText(item.name)).toBeInTheDocument()
        expect(screen.getByText(item.dietaries[0])).toBeInTheDocument()
        expect(screen.getByText(item.dietaries[1])).toBeInTheDocument()
        expect(screen.queryByText('x')).not.toBeInTheDocument()
        expect(screen.queryByText('select')).not.toBeInTheDocument()
        expect(screen.queryByText('deselect')).not.toBeInTheDocument()
    })

    it('renders remove button', () => {
        const item = {
            name: 'test name',
            dietaries: ['ve', 'xe'],
            isSelected: false,
            isRemovable: true
        }
        render(<Item {...item} />)
        expect(screen.queryByText('x')).toBeInTheDocument()
        expect(screen.queryByText('select')).not.toBeInTheDocument()
        expect(screen.queryByText('deselect')).not.toBeInTheDocument()
    })


    it('renders select button', () => {
        const item = {
            name: 'test name',
            dietaries: ['ve', 'xe'],
            isSelectable: true,
            isSelected: false,
        }
        render(<Item {...item} />)
        expect(screen.queryByText('x')).not.toBeInTheDocument()
        expect(screen.queryByText('select')).toBeInTheDocument()
        expect(screen.queryByText('deselect')).not.toBeInTheDocument()

    })

    it('renders deselect button', () => {
        const item = {
            name: 'test name',
            dietaries: ['ve', 'xe'],
            isSelectable: true,
            isSelected: true,
        }
        render(<Item {...item} />)
        expect(screen.queryByText('x')).not.toBeInTheDocument()
        expect(screen.queryByText('select')).not.toBeInTheDocument()
        expect(screen.queryByText('deselect')).toBeInTheDocument()
    })

    it('calls function with correct id when toggle button is clicked', () => {
        const spy = jest.fn()

        const item = {
            name: 'test name',
            dietaries: ['ve', 'xe'],
            isSelectable: true,
            isSelected: true,
            onSelect: spy
        }

        render(<Item {...item} />)
        fireEvent.click(screen.getByText('deselect'))
        expect(spy).toHaveBeenCalledTimes(1)
    })

    it('calls function with correct id when toggle button is clicked', () => {
        const spy = jest.fn()

        const item = {
            name: 'test name',
            dietaries: ['ve', 'xe'],
            isRemovable: true,
            isSelected: false,
            onRemove: spy
        }

        render(<Item {...item} />)
        fireEvent.click(screen.getByText('x'))
        expect(spy).toHaveBeenCalledTimes(1)
    })


})
