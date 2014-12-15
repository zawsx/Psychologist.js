/* 
 * Copyright (C) 2014 Sean McBeth
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

function Application(name){
    this.formStateKey = name + " - formState";
    this.formState = getSetting(this.formStateKey);
    this.ctrls = findEverything();
    this.fullscreenElement = document.documentElement;
    this.options = combineDefaults(options, Application);   
    this.users = {};
    this.chatLines = [];
    this.userName = Application.DEFAULT_USER_NAME;
    this.focused = true;
    this.wasFocused = false; 
}

Application.DEFAULT_USER_NAME = "CURRENT_USER_OFFLINE";
Application.DEFAULTS = {
    
};