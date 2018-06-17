var state = {
    items: []
};

function addItem(state, item) {
    state.items.push({
        name: item,
        isChecked: false
    });
}

function deleteItem(state, itemIndex) {
    state.items.splice(itemIndex, 1);
}

function resetList(state){
    state.items = [];
}

function checkItem(state, index) {
    state.items[index].isChecked = !state.items[index].isChecked;
}

function renderList(state, element){
    var elementHTML = state.items.map(function(item){
        var checkedClass = item.isChecked ? "shopping-item__checked" : "";
        return '    <li> \
                        <span class="shopping-item '+ checkedClass +'">'+item.name+'</span> \
                        <div class="shopping-item-controls"> \
                            <button class="shopping-item-toggle"> \
                                <span class="button-label">check</span> \
                            </button> \
                            <button class="shopping-item-delete"> \
                                <span class="button-label">delete</span> \
                            </button> \
                        </div> \
                    </li>';
    }); 
    element.html(elementHTML);
}

$("#js-shopping-list-form").submit(function(event) {
    event.preventDefault();
    addItem(state, $('#shopping-list-entry').val());
    renderList(state, $('.shopping-list'));
});

$(".shopping-list").on("click", ".shopping-item-delete", function(event){
    var index = parseInt($(this).closest("li").index());
    deleteItem(state, index);
    renderList(state, $('.shopping-list'));
});

$(".shopping-list").on("click", ".shopping-item-toggle", function(event){
    var index = parseInt($(this).closest("li").index());
    checkItem(state, index);
    renderList(state, $('.shopping-list'));
});