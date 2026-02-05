import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface MenuType {
  id: string; // Unique ID for granular filtering
  title: string;
  description: string;
  category: 'standard' | 'mobile' | 'hierarchical' | 'specialized';
  icon: string;
  color: string;
  tag: string;
}

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {
  // Default to first item
  currentFilter: string = 'navbar';

  menuItems: MenuType[] = [
    {
      id: 'navbar',
      title: 'Navbar Clásico',
      description: 'La barra de navegación horizontal estándar en la parte superior. Ideal para sitios con pocas secciones principales.',
      category: 'standard',
      icon: 'fa-bars',
      color: '#3b82f6',
      tag: 'Estándar'
    },
    {
      id: 'hamburger',
      title: 'Menú Hamburguesa',
      description: 'Icono de tres líneas que despliega un menú oculto. Esencial para diseños móviles y minimalistas.',
      category: 'mobile',
      icon: 'fa-hamburger',
      color: '#f43f5e',
      tag: 'Móvil'
    },
    {
      id: 'dropdown',
      title: 'Menú Dropdown',
      description: 'Permite agrupar subsecciones bajo un elemento principal, desplegándose al pasar el cursor o hacer clic.',
      category: 'hierarchical',
      icon: 'fa-caret-square-down',
      color: '#8b5cf6',
      tag: 'Jerárquico'
    },
    {
      id: 'megamenu',
      title: 'Mega Menú',
      description: 'Un panel grande expandible que muestra muchas opciones a la vez, a menudo con imágenes o categorías.',
      category: 'hierarchical',
      icon: 'fa-th-large',
      color: '#10b981',
      tag: 'E-commerce'
    },
    {
      id: 'sticky',
      title: 'Sticky Menu',
      description: 'Navegación que permanece fija en la parte superior de la pantalla mientras el usuario hace scroll hacia abajo.',
      category: 'specialized',
      icon: 'fa-paperclip',
      color: '#f59e0b',
      tag: 'Accesibilidad'
    },
    {
      id: 'sidebar',
      title: 'Sidebar Vertical',
      description: 'Menú lateral fijo, común en paneles de administración (dashboards) o documentación extensa.',
      category: 'specialized',
      icon: 'fa-columns',
      color: '#06b6d4',
      tag: 'Dashboards'
    }
  ];

  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  get filteredMenus() {
    // Return only the currently selected item
    return this.menuItems.filter(item => item.id === this.currentFilter);
  }

  get currentItem() {
    return this.menuItems.find(item => item.id === this.currentFilter);
  }

  get demoTitle(): string {
    return this.currentItem ? this.currentItem.title : 'Ejemplo';
  }

  get demoDescription(): string {
    return this.currentItem ? this.currentItem.description : '';
  }

  setFilter(filter: string) {
    this.currentFilter = filter;
    this.isMenuOpen = false; // Reset state
  }
}
