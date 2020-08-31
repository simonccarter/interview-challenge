import React from 'react'
import { render, screen } from '@testing-library/react'
import Item from './Item'

describe('Item tests', () => {
    it('renders', () => {
        const item = {
            name: 'test name',
            dietaries: ['ve', 'xe'],
            selected: false,
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
            selected: false,
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
            selected: false,
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
            selected: true,
        }
        render(<Item {...item} />)
        expect(screen.queryByText('x')).not.toBeInTheDocument()
        expect(screen.queryByText('select')).not.toBeInTheDocument()
        expect(screen.queryByText('deselect')).toBeInTheDocument()
    })
})
