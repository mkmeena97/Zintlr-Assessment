export default function Sections()
{
    return(
<div>        
    <div>
   <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
    <div class="grid grid-cols-4 gap-2  ">
        <div class="flex md-2 flex-col h-auto rounded bg-gray-50 dark:bg-gray-800 p-4">            
            <h1 class="text-dark text-lg font-bold mb-2">Hello Mahendra</h1>
            <p class="text-gray-600 dark:text-gray-400 mb-4 text-xs">You have 134 consumers this week.</p>
            <div class="flex space-x-2">
                <button class="bg-blue-500 text-white px-4 py-2 flex-grow text-xs">Add consumers</button>
                <button class="bg-green-500 text-white px-4 py-2 flex-grow text-xs">Manage consumers</button>
        </div>
        </div>
        <div class="flex md-2 flex-col h-auto rounded bg-yellow-50 dark:bg-yellow-800 p-4">
            <p>You have 276 KYC Approval pending</p>
            <button class="bg-gray-500 text-white mt-5 mb-1 py-3 text-xs">View List</button>
        </div>
        <div class="flex md-2 flex-col h-auto rounded bg-red-50 dark:bg-red-800 p-4">
            <p>There are 186 High risk consumers</p>
            <button class="bg-gray-500 text-white mt-5 mb-1 py-3 text-xs">View List</button>
        </div>
        <div class="flex md-2 flex-col h-auto rounded bg-blue-50 dark:bg-blue-800 p-4">
            <p>There are 32 tickets open</p>
            <button class="bg-gray-500 text-white mt-11 mb-1 py-3 text-xs">View List</button>
        </div>
    </div>
   </div>
   </div>
</div>

    );
}